import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo04Component } from './demo-04/demo-04.component';
import { WidgetComponent } from '../shared/UI/widget/widget.component';
import { WidgetModule } from '../shared/UI/widget/widget.module';
import { FlipCardModule } from '../shared/UI/flip-card/flip-card.module';
import { Sample01WidgetComponent } from './components/sample-01-widget/sample-01-widget.component';

@NgModule({
  declarations: [AppComponent, Demo04Component, Sample01WidgetComponent],
  imports: [BrowserModule, AppRoutingModule,
    WidgetModule, FlipCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
