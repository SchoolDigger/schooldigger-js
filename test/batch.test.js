/**
 * Tests for the hand-written batch helpers (src/batch.ts). Build first (npm run build).
 *
 *   node test/batch.test.js                              # signature tests (offline)
 *   SCHOOLDIGGER_BATCH_LIVE=1 node test/batch.test.js    # plus a real 25-item batch
 *
 * The live test needs SCHOOLDIGGER_APP_ID / SCHOOLDIGGER_APP_KEY (a paid-plan key; each
 * item counts as one API call). Exits non-zero on any failure.
 */
const assert = require('assert');
const { BatchClient, BatchError, Configuration, verifySignature } = require('../dist');

const APP_KEY = '0123456789abcdef0123456789abcdef';
const BODY = '{"batchId":"b_0123456789ab","status":"completed","itemCount":3}';
// Same fixed vector as the Python SDK's test/test_batch.py.
const KNOWN_SIGNATURE = 'sha256=54a7f7b0c067adfbdf8cce54d263b0c92c7b06ed628e7eca4ab709b8b180f9cc';

async function signatureTests() {
  assert.strictEqual(await verifySignature(BODY, KNOWN_SIGNATURE, APP_KEY), true);
  assert.strictEqual(await verifySignature(new TextEncoder().encode(BODY), KNOWN_SIGNATURE, APP_KEY), true);
  assert.strictEqual(await verifySignature(BODY, KNOWN_SIGNATURE.toUpperCase().replace('SHA256=', 'sha256='), APP_KEY), true);
  assert.strictEqual(await verifySignature(BODY + ' ', KNOWN_SIGNATURE, APP_KEY), false);
  assert.strictEqual(await verifySignature(BODY, KNOWN_SIGNATURE, 'other'), false);
  assert.strictEqual(await verifySignature(BODY, undefined, APP_KEY), false);
  assert.strictEqual(await verifySignature(BODY, '', APP_KEY), false);
  console.log('verifySignature: 7 checks passed');
}

async function liveTest() {
  const appID = process.env.SCHOOLDIGGER_APP_ID;
  const appKey = process.env.SCHOOLDIGGER_APP_KEY;
  const creds = new URLSearchParams({ appID, appKey }).toString();
  const singleGet = async (path) => {
    const r = await fetch(`https://api.schooldigger.com${path}${path.includes('?') ? '&' : '?'}${creds}`);
    return { status: r.status, body: await r.json() };
  };

  const listing = await singleGet('/v3.1/schools?st=WA&districtID=5301110&perPage=50');
  assert.strictEqual(listing.status, 200);
  const ids = listing.body.schoolList.map(s => s.schoolid).slice(0, 25);
  assert.strictEqual(ids.length, 25);
  const items = ids.map((id, i) => ({ id: `s${i}`, path: `/v3.1/schools/${id}` }));

  // Configuration form, as the generated APIs take it.
  const client = new BatchClient(new Configuration({
    apiKey: (name) => (name === 'appID' ? appID : appKey),
  }));

  await assert.rejects(client.submitBatch([{ id: 'x', path: '/v3.1/schools/1?appKey=no' }]),
    (e) => e instanceof BatchError && e.status === 400 && e.errors.length > 0);

  const started = Date.now();
  const secs = () => Math.round((Date.now() - started) / 1000);
  const sub = await client.submitBatch(items);
  let finished = false;
  try {
    assert.strictEqual(sub.status, 'queued');
    assert.strictEqual(sub.itemCount, 25);
    assert.strictEqual(sub.partCount, 2);
    const parts = {};
    for await (const { part, results } of client.waitForBatch(sub.batchId, { timeoutMs: 600000 })) {
      console.log(`  part ${part}: ${results.length} items at ${secs()}s`);
      parts[part] = results;
    }
    finished = true;
    assert.deepStrictEqual(Object.keys(parts).map(Number).sort(), [0, 1]);
    const final = await client.getBatch(sub.batchId);
    assert.strictEqual(final.status, 'completed');
    assert.deepStrictEqual(final.partsReady, [0, 1]);
    const results = parts[0].concat(parts[1]);
    assert.deepStrictEqual(results.map(r => r.id), items.map(i => i.id));
    for (let i = 0; i < items.length; i++) {
      assert.strictEqual(results[i].path, items[i].path);
      assert.strictEqual(results[i].status, 200, results[i].error);
      const single = await singleGet(items[i].path);
      assert.strictEqual(single.status, 200);
      assert.deepStrictEqual(results[i].body, single.body, `${items[i].path} differs from a single GET`);
    }
    console.log(`  batch ${sub.batchId}: 25 items, 2 parts, all bodies equal single GETs (${secs()}s)`);
  } finally {
    if (!finished) await client.cancelBatch(sub.batchId).catch(() => {});
  }
}

(async () => {
  await signatureTests();
  if (process.env.SCHOOLDIGGER_BATCH_LIVE === '1') await liveTest();
  else console.log('live batch test skipped (set SCHOOLDIGGER_BATCH_LIVE=1)');
  console.log('OK');
})().catch((e) => {
  console.error('FAILED:', e && e.message);
  process.exit(1);
});
