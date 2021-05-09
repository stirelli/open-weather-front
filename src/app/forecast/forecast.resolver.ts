import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ForecastService } from './state/forecast.service';

@Injectable({ providedIn: 'root' })
// tslint:disable-next-line: no-any
export class ForecastResolver implements Resolve<any> {
  constructor(private store: ForecastService) {}

  // tslint:disable-next-line: no-any
  resolve({ data, params }: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    if (data) {
      const city: string = params[data.param];
      this.store.getForecast(city).subscribe();
    }

    return of(true);
  }
}
