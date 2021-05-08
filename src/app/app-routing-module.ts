import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouteName } from './core/models/route-name.enums';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: AppRouteName.FORECAST,
    pathMatch: 'full'
  },
  {
    path: AppRouteName.FORECAST,
    loadChildren: () => import('./forecast/forecast.module').then(m => m.ForecastModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}