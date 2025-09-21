import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-widget-header',
   templateUrl: './widget-header.component.html',
  styleUrl: './widget-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class WidgetHeaderComponent {

}
