import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WidgetHeaderActionsComponent } from './widget-header-actions/widget-header-actions.component';
import { WidgetContentComponent } from './widget-content/widget-content.component';
import { WidgetFooterComponent } from './widget-footer/widget-footer.component';
import { WidgetHeaderComponent } from './widget-header/widget-header.component';
import { WidgetHeaderSubtitleComponent } from './widget-header-subtitle/widget-header-subtitle.component';
import { WidgetHeaderTitleComponent } from './widget-header-title/widget-header-title.component';
import { WidgetComponent } from './widget.component';

@NgModule({
  declarations: [
    WidgetComponent,
    WidgetHeaderComponent,
    WidgetContentComponent,
    WidgetFooterComponent,
    WidgetHeaderActionsComponent,
    WidgetHeaderSubtitleComponent,
    WidgetHeaderTitleComponent,
    WidgetFooterComponent
  ],
  imports: [CommonModule],
  exports: [WidgetComponent,
    WidgetHeaderComponent,
    WidgetContentComponent,
    WidgetFooterComponent,
    WidgetHeaderActionsComponent,
    WidgetHeaderSubtitleComponent,
    WidgetHeaderTitleComponent,
    WidgetFooterComponent]
})
export class WidgetModule {}
