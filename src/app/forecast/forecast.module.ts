import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastRoutingModule } from './forecast-routing.module';

// containers
import * as fromContainers from './containers';

@NgModule({
  imports: [CommonModule, ForecastRoutingModule],
  declarations: [...fromContainers.containers]
})
export class ForecastModule {}
