import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiganalOnServicesComponent } from './siganal-on-services/siganal-on-services.component';

const routes: Routes = [
  { path: 'signal-on-services', component: SiganalOnServicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalArchitectureRoutingModule { }
