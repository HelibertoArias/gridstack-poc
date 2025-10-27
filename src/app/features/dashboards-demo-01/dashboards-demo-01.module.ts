import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsDemo01RoutingModule } from './dashboards-demo-01-routing.module';
import { Dashboard01ContainerComponent } from './containers/dashboard-01/dashboard-01.container.component';
import { Widget01Component } from './components/widget-01/widget-01.component';
import { Widget02Component } from './components/widget-02/widget-02.component';
import { Widget03Component } from './components/widget-03/widget-03.component';
import { Widget04Component } from './components/widget-04/widget-04.component';
import { Widget05Component } from './components/widget-05/widget-05.component';
import { Widget06Component } from './components/widget-06/widget-06.component';
import { AngularMaterialModule } from '../../../shared/angular-material.module';
import { FlipCardModule } from '../../../shared/UI/flip-card/flip-card.module';


@NgModule({
  declarations: [
    Dashboard01ContainerComponent,
    Widget01Component,
    Widget02Component,
    Widget03Component,
    Widget04Component,
    Widget05Component,
    Widget06Component
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    DashboardsDemo01RoutingModule,
    FlipCardModule

  ]
})
export class DashboardsDemo01Module { }
