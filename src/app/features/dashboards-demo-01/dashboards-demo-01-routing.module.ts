import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard01ContainerComponent } from './containers/dashboard-01/dashboard-01.container.component';

const routes: Routes = [
  {
    path: '',
    component: Dashboard01ContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardsDemo01RoutingModule { }
