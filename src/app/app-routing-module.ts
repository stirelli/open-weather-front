import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouteName } from './core/models/route-name.enums';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: AppRouteName.HOME,
    pathMatch: 'full'
  },
  {
    path: AppRouteName.HOME,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: AppRouteName.FORECAST,
    loadChildren: () => import('./forecast/forecast.module').then(m => m.ForecastModule)
  },
  {
    path: '**',
    redirectTo: AppRouteName.HOME
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
