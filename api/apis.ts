export * from './autocompleteApi';
import { AutocompleteApi } from './autocompleteApi';
export * from './districtsApi';
import { DistrictsApi } from './districtsApi';
export * from './rankingsApi';
import { RankingsApi } from './rankingsApi';
export * from './schoolsApi';
import { SchoolsApi } from './schoolsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AutocompleteApi, DistrictsApi, RankingsApi, SchoolsApi];
