import { SWRResponse } from 'swr';
import { SWRMutationResponse } from 'swr/mutation';

import { Error } from './types.ts';

const SUCCESS_CODES: number[] = [200, 201, 204];

const BASE_URL = 'http://127.0.0.1:5000';

export type APIHook<Data, Args> = (args: Args) => SWRResponse<Data, Error>;
export type APIMutationHook<Data, Args, Body> = (args: Args) => SWRMutationResponse<Data, Error, Body>;

export interface FetcherArgs<Arg> {
  arg: Arg;
}

export class FetchError implements Error {
  readonly code: number;
  readonly name: string;
  readonly description: string;

  public constructor(data: Error) {
    this.code = data.code;
    this.name = data.name;
    this.description = data.description;
  }

  get isClient(): boolean {
    return this.code >= 400 && this.code < 500;
  }
}

export async function fetcher<Data, Body = never>(path: string, method?: string, body?: Body): Promise<Data> {
  const response = await fetch(BASE_URL + path, {
    method: method || 'GET',
    headers: body ? { 'Content-Type': 'application/json' } : {},
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json();

  if (SUCCESS_CODES.includes(response.status)) return data;
  else throw new FetchError(data);
}
