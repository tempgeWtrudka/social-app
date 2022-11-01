import { Headers } from '@atproto/xrpc';
export interface QueryParams {
}
export interface CallOptions {
    headers?: Headers;
    encoding: 'application/json';
}
export interface InputSchema {
    username: string;
    password: string;
}
export interface OutputSchema {
    jwt: string;
    name: string;
    did: string;
}
export interface Response {
    success: boolean;
    headers: Headers;
    data: OutputSchema;
}
export declare function toKnownErr(e: any): any;