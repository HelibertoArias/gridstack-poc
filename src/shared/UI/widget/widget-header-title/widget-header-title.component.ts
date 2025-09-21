import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-widget-header-title',
   templateUrl: './widget-header-title.component.html',
  styleUrl: './widget-header-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class WidgetHeaderTitleComponent {

}
