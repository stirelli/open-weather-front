import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ForecastService } from '../state/forecast.service';

@Injectable({ providedIn: 'root' })
// tslint:disable-next-line: no-any
export class ForecastSharedResolver implements Resolve<any> {
  constructor(private store: ForecastService) {}

  // tslint:disable-next-line: no-any
  resolve({ data, params }: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    if (data) {
      const id: string = params[data.param];
      this.store.getSharedForecast(id).subscribe();
    }

    return of(true);
  }
}
