import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalArchitectureRoutingModule } from './signal-architecture-routing.module';
import { SiganalOnServicesComponent } from './siganal-on-services/siganal-on-services.component';
import { TestInputsComponent } from './test-inputs.component';


@NgModule({
  declarations: [
    SiganalOnServicesComponent,
    TestInputsComponent
  ],
  imports: [
    CommonModule,
    SignalArchitectureRoutingModule
  ]
})
export class SignalArchitectureModule { }
