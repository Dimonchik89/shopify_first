import { ApiHooks } from './hooks';

export type ApiFetcherOptions = {
  query: string;
  variables?: Variables;
};

export type Variables = {
  [key: string]: string | undefined | any;
};

export type ApiFetcherResults<T> = {
  data: T;
};

export interface ApiConfig {
  fetch<T>(option: ApiFetcherOptions): Promise<ApiFetcherResults<T>>;
  checkoutCookie: string;
}

export type ApiFetcher<T = any> = (
  option: ApiFetcherOptions
) => Promise<ApiFetcherResults<T>>;

export interface ApiProviderContext {
  hooks: ApiHooks;
  fetcher: ApiFetcher;
  checkoutCookie: string;
}
