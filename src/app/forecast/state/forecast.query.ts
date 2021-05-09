import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ForecastStore, ForecastState } from './forecast.store';

@Injectable({
  providedIn: 'root'
})
export class ForecastQuery extends QueryEntity<ForecastState> {
  constructor(protected store: ForecastStore) {
    super(store);
  }
}
