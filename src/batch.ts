/// <reference lib="es2018.asynciterable" />
/// <reference lib="es2018.asyncgenerator" />
/**
 * Helpers for the SchoolDigger async batch service (https://api.schooldigger.com/batches).
 *
 * Hand-written, not generated: src/batch.ts and src/index.ts (which re-exports it) are in
 * .openapi-generator-ignore so regeneration keeps them.
 *
 * The batch service runs up to 2,000 API GET calls for you, paced at half your plan's
 * per-minute limit, and returns the results in parts of 20 items as gzipped NDJSON.
 * See https://developer.schooldigger.com/batch-requests-schooldigger-api
 */

import { Configuration } from './runtime';

export const BATCH_BASE_PATH = 'https://api.schooldigger.com';

/** Statuses during which a batch still runs (the status call sends Retry-After). */
export const BATCH_ACTIVE_STATUSES = ['queued', 'running'];

export type BatchStatusName = 'queued' | 'running' | 'completed' | 'canceled' | 'failed' | 'expired';

/** One item to run: `path` is a GET path on the API, e.g. `/v3.1/schools/064215006903`. */
export interface BatchItem {
    /** Your key for the item, 1-64 characters, unique in the batch. Defaults to its index ("0", "1", ...). */
    id?: string;
    path: string;
}

/** The 202 response to submitBatch. */
export interface BatchSubmitted {
    batchId: string;
    status: BatchStatusName;
    itemCount: number;
    partSize: number;
    partCount: number;
    estimatedSeconds: number;
    statusUrl: string;
}

/** The batch status (getBatch, cancelBatch, callbacks). */
export interface BatchStatus {
    batchId: string;
    status: BatchStatusName;
    itemCount: number;
    completedCount: number;
    failedCount: number;
    partSize: number;
    partCount: number;
    partsReady: number[];
    submittedUtc: string;
    startedUtc: string | null;
    completedUtc: string | null;
    pausedUntilUtc: string | null;
    estimatedSecondsRemaining: number | null;
    expiresUtc: string | null;
}

/** One NDJSON line of a result part. `body` is the exact JSON the same GET returns. */
export interface BatchItemResult {
    id: string;
    path: string;
    status: number;
    body: any;
    /** Set when the response wasn't JSON (then `body` is null). */
    error?: string;
}

/** A downloaded result part, as yielded by waitForBatch. */
export interface BatchPart {
    part: number;
    results: BatchItemResult[];
}

/** An error response from the batch service ({code, message, description, help}, plus `errors` on a 400 submit). */
export class BatchError extends Error {
    override name = 'BatchError';
    readonly code: number;
    readonly description?: string;
    readonly help?: string;
    readonly errors: string[];
    constructor(readonly status: number, readonly body?: any) {
        super(`HTTP ${status}: ${[body?.message, body?.description].filter(Boolean).join(' ')}`);
        this.code = body?.code ?? status;
        this.description = body?.description;
        this.help = body?.help;
        this.errors = Array.isArray(body?.errors) ? body.errors : [];
    }
}

/** Thrown by waitForBatch when a batch ends failed, canceled or expired (after the ready parts were yielded). */
export class BatchNotCompletedError extends BatchError {
    override name = 'BatchNotCompletedError';
    constructor(readonly batch: BatchStatus) {
        super(200, { message: `Batch ${batch.batchId} ended ${batch.status}` });
    }
}

export interface BatchClientOptions {
    appID?: string;
    appKey?: string;
    /** A generated-SDK Configuration; its apiKey('appID') / apiKey('appKey') and fetchApi are used. */
    configuration?: Configuration;
    /** Defaults to https://api.schooldigger.com. */
    basePath?: string;
    fetchApi?: typeof fetch;
}

export interface WaitForBatchOptions {
    /** Give up (throw) after this many ms; the batch keeps running. */
    timeoutMs?: number;
    /** Upper bound on one wait between polls, in seconds (default 60). */
    maxPollSeconds?: number;
    /** Called with each status poll. */
    onStatus?: (status: BatchStatus) => void;
}

/** Client for the 4 batch routes: submitBatch, getBatch, getBatchResults, cancelBatch, plus waitForBatch. */
export class BatchClient {
    private readonly basePath: string;
    private readonly fetchApi: typeof fetch;

    constructor(private readonly options: BatchClientOptions | Configuration = {}) {
        const o: BatchClientOptions = options instanceof Configuration ? { configuration: options } : options;
        this.options = o;
        this.basePath = (o.basePath ?? BATCH_BASE_PATH).replace(/\/+$/, '');
        const f = o.fetchApi ?? (o.configuration?.fetchApi as typeof fetch | undefined) ?? fetch;
        this.fetchApi = (input, init) => f(input, init);
    }

    /** POST /batches. Items are {id, path} objects or plain path strings. Returns the 202 body. */
    async submitBatch(items: Array<BatchItem | string>, options: { callbackUrl?: string } = {}): Promise<BatchSubmitted> {
        const body: any = { items: items.map(i => (typeof i === 'string' ? { path: i } : i)) };
        if (options.callbackUrl) body.callbackUrl = options.callbackUrl;
        const r = await this.request('POST', '/batches', {}, JSON.stringify(body));
        return this.json(r);
    }

    /** GET /batches/{batchId}: the batch status. */
    async getBatch(batchId: string): Promise<BatchStatus> {
        return (await this.getStatus(batchId)).status;
    }

    /** GET /batches/{batchId}/results?part=N: one part, decoded from gzipped NDJSON. 409 if not ready, 410 after retention. */
    async getBatchResults(batchId: string, part: number): Promise<BatchItemResult[]> {
        const r = await this.request('GET', `/batches/${encodeURIComponent(batchId)}/results`, { part: String(part) });
        if (r.status !== 200) throw await this.error(r);
        const text = await r.text();
        return text.split('\n').filter(l => l.trim()).map(l => JSON.parse(l));
    }

    /** DELETE /batches/{batchId}: stop a queued or running batch. Returns its status. */
    async cancelBatch(batchId: string): Promise<BatchStatus> {
        return this.json(await this.request('DELETE', `/batches/${encodeURIComponent(batchId)}`));
    }

    /**
     * Poll the batch (waiting Retry-After seconds between polls) and yield each part as soon as it
     * is ready. Returns when the batch is completed; if it ends failed, canceled or expired, the
     * ready parts are yielded first, then BatchNotCompletedError is thrown.
     *
     *     for await (const { part, results } of client.waitForBatch(batchId)) { ... }
     */
    async *waitForBatch(batchId: string, options: WaitForBatchOptions = {}): AsyncGenerator<BatchPart, BatchStatus, undefined> {
        const deadline = options.timeoutMs != null ? Date.now() + options.timeoutMs : undefined;
        const maxPoll = options.maxPollSeconds ?? 60;
        const done = new Set<number>();
        for (;;) {
            const { status, retryAfter } = await this.getStatus(batchId);
            options.onStatus?.(status);
            const ready = (status.partsReady || []).filter(p => !done.has(p)).sort((a, b) => a - b);
            for (const part of ready) {
                const results = await this.getBatchResults(batchId, part);
                done.add(part);
                yield { part, results };
            }
            if (BATCH_ACTIVE_STATUSES.indexOf(status.status) < 0) {
                if (status.status === 'completed') return status;
                throw new BatchNotCompletedError(status);
            }
            let wait = Math.min(retryAfter ?? 15, maxPoll) * 1000;
            if (deadline != null) {
                const left = deadline - Date.now();
                if (left <= 0) throw new Error(`Batch ${batchId} is still ${status.status}`);
                wait = Math.min(wait, left);
            }
            await new Promise(res => setTimeout(res, Math.max(wait, 1000)));
        }
    }

    // ---- internals ----

    private async getStatus(batchId: string): Promise<{ status: BatchStatus; retryAfter?: number }> {
        const r = await this.request('GET', `/batches/${encodeURIComponent(batchId)}`);
        const status = await this.json(r);
        const ra = Number(r.headers.get('Retry-After'));
        return { status, retryAfter: r.headers.get('Retry-After') != null && !isNaN(ra) ? ra : undefined };
    }

    private async credentials(): Promise<[string, string]> {
        const o = this.options as BatchClientOptions;
        const key = o.configuration?.apiKey;
        const appID = o.appID ?? (key ? await key('appID') : undefined);
        const appKey = o.appKey ?? (key ? await key('appKey') : undefined);
        if (!appID || !appKey) throw new Error('BatchClient needs an appID and appKey');
        return [appID, appKey];
    }

    private async request(method: string, path: string, query: Record<string, string> = {}, body?: string): Promise<Response> {
        const [appID, appKey] = await this.credentials();
        const qs = new URLSearchParams({ appID, appKey, ...query }).toString();
        const headers: Record<string, string> = { Accept: 'application/json, application/x-ndjson' };
        if (body != null) headers['Content-Type'] = 'application/json';
        try {
            return await this.fetchApi(`${this.basePath}${path}?${qs}`, { method, headers, body });
        } catch (e: any) {
            // Don't pass on the error text: some fetch errors include the URL, which holds the appKey.
            throw new Error(`${method} ${this.basePath}${path} failed: ${e?.name ?? 'network error'}`);
        }
    }

    private async json(r: Response): Promise<any> {
        if (r.status >= 400) throw await this.error(r);
        return r.json();
    }

    private async error(r: Response): Promise<BatchError> {
        const text = await r.text().catch(() => '');
        let body: any;
        try { body = text ? JSON.parse(text) : undefined; } catch { body = { description: text.slice(0, 500) }; }
        return new BatchError(r.status, body);
    }
}

function hex(buf: ArrayBuffer): string {
    return Array.from(new Uint8Array(buf), b => ('0' + b.toString(16)).slice(-2)).join('');
}

/**
 * Check a callback's X-SchoolDigger-Signature header: "sha256=" + hex HMAC-SHA256 of the raw body,
 * keyed by the UTF-8 bytes of the lowercase hex SHA-256 of your appKey. Pass the raw body exactly
 * as received (string or bytes), before JSON parsing. Uses Web Crypto (Node 18+, browsers).
 */
export async function verifySignature(rawBody: string | Uint8Array, signatureHeader: string | null | undefined, appKey: string): Promise<boolean> {
    if (!signatureHeader) return false;
    const subtle = (globalThis as any).crypto?.subtle as SubtleCrypto | undefined;
    if (!subtle) throw new Error('verifySignature needs Web Crypto (globalThis.crypto.subtle; Node 18+)');
    const enc = new TextEncoder();
    const keyHex = hex(await subtle.digest('SHA-256', enc.encode(appKey)));
    const key = await subtle.importKey('raw', enc.encode(keyHex), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const data = typeof rawBody === 'string' ? enc.encode(rawBody) : rawBody;
    const expected = 'sha256=' + hex(await subtle.sign('HMAC', key, data));
    const given = signatureHeader.trim().toLowerCase();
    if (given.length !== expected.length) return false;
    let diff = 0;
    for (let i = 0; i < expected.length; i++) diff |= given.charCodeAt(i) ^ expected.charCodeAt(i);
    return diff === 0;
}
