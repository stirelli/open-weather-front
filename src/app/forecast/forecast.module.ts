import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastRoutingModule } from './forecast-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';

// containers
import * as fromContainers from './containers';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, ForecastRoutingModule, HighchartsChartModule, SharedModule],
  declarations: [...fromContainers.containers]
})
export class ForecastModule {}
