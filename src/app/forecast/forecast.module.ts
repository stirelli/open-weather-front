import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import * as fromContainers from './containers';

@NgModule({
  imports: [CommonModule],
  declarations: [...fromContainers.containers]
})
export class ForecastModule {}
