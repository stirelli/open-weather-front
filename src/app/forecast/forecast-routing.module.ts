import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastOverviewComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: ForecastOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ForecastRoutingModule {}
