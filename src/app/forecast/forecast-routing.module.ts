import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppChildRouteName } from '@app/core/models/route-name.enums';
import { ForecastOverviewComponent } from './containers';
import { ForecastResolver } from './forecast.resolver';

const routes: Routes = [
  {
    path: '',
    component: ForecastOverviewComponent,
    children: [
      {
        path: `${AppChildRouteName.CITY}/:city`,
        resolve: { data: ForecastResolver },
        data: { param: 'city' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ForecastRoutingModule {}
