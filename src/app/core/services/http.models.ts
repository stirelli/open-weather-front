import { HttpHeaders, HttpParams } from '@angular/common/http';

interface HttpRequestOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body' | 'response';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
}

export interface HttpRequestOptionsJson extends HttpRequestOptions {
  observe?: 'body';
  responseType?: 'json';
}
