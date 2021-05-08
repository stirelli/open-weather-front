import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOverviewComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: HomeOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
