import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ForecastQuery } from '../state/forecast.query';
import { ForecastState } from '../state/forecast.store';

@Injectable({
  providedIn: 'root'
})
export class ForecastFacadeService {
  private allForecast$: Observable<ForecastState>;

  constructor(private forecastQuery: ForecastQuery) {
    this.allForecast$ = this.forecastQuery.select('data').pipe(filter(data => !!data));
  }

  getForecast(): Observable<ForecastState> {
    return this.allForecast$;
  }
}
