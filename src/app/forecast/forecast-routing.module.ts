import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppChildRouteName, AppRouteName } from '@app/core/models/route-name.enums';
import { ForecastOverviewComponent } from './containers';
import { ForecastSharedResolver } from './guards/forecast-shared.resolver';
import { ForecastResolver } from './guards/forecast.resolver';

const routes: Routes = [
  {
    path: '',
    component: ForecastOverviewComponent,
    children: [
      {
        path: `${AppChildRouteName.CITY}/:city`,
        resolve: { data: ForecastResolver },
        data: { param: 'city' }
      },
      {
        path: `${AppChildRouteName.SHARED}/:id`,
        resolve: { data: ForecastSharedResolver },
        data: { param: 'id' }
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
