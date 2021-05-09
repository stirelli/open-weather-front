import { Injectable } from '@angular/core';
import { RootUrl } from '@app/core/models/url-enums';
import { HttpService } from '@app/core/services/http.service';
import { environment as env } from '@app/environments/environment';
import { setLoading } from '@datorama/akita';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ForecastModule } from '../forecast.module';
import { ForecastModel } from './forecast.model';
import { ForecastStore } from './forecast.store';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor(private httpService: HttpService, private forecastStore: ForecastStore) {}

  getForecast(city: string) {
    return this.httpService
      .get<ForecastModel>(`${env.baseUrl}/${RootUrl.Forecast}`, { params: { location: city } })
      .pipe(
        setLoading(this.forecastStore),
        tap(forecast => {
          this.forecastStore.update(state => ({
            ...state,
            ...forecast
          }));
        }),
        catchError(error => {
          this.forecastStore.setError(error);
          return of(error);
        })
      );
  }

  getSharedForecast(id: string) {
    return this.httpService
      .get<ForecastModel>(`${env.baseUrl}/${RootUrl.Shared}`, { params: { id } })
      .pipe(
        setLoading(this.forecastStore),
        tap(forecast => {
          this.forecastStore.update(state => ({
            ...state,
            ...forecast
          }));
        }),
        catchError(error => {
          this.forecastStore.setError(error);
          return of(error);
        })
      );
  }
}
