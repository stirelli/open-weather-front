import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastRoutingModule } from './forecast-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';

// containers
import * as fromContainers from './containers';

@NgModule({
  imports: [CommonModule, ForecastRoutingModule, HighchartsChartModule],
  declarations: [...fromContainers.containers]
})
export class ForecastModule {}
