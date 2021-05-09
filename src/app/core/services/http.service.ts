import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpRequestOptionsJson } from './http.models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(protected http: HttpClient) {}

  get<T>(endpoint: string, options?: HttpRequestOptionsJson): Observable<T> {
    return this.http.get<T>(endpoint, options).pipe(tap(resp => console.log('GET Call', { endpoint, resp, options })));
  }
}
