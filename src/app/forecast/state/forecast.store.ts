import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ForecastModel } from './forecast.model';

export interface ForecastState extends EntityState<ForecastModel> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'forecast', idKey: '_id' })
export class ForecastStore extends EntityStore<ForecastState> {
  constructor() {
    super();
  }
}
