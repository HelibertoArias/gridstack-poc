import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './demo-01/demo-01.component';
import { Demo02Component } from './demo-02/demo-02.component';
import { Demo03Component } from './demo-03/demo-03.component';
import { Demo04Component } from './demo-04/demo-04.component';
import { WidgetModule } from '../shared/UI/widget/widget.module';

const routes: Routes = [
  { path: 'demo-01', component: Demo01Component },
  { path: 'demo-02', component: Demo02Component },
  { path: 'demo-03', component: Demo03Component },
  { path: 'demo-04', component: Demo04Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), WidgetModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
