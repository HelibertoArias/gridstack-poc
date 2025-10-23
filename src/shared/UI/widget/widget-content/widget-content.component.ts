import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-widget-content',
   templateUrl: './widget-content.component.html',
  styleUrl: './widget-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class WidgetContentComponent {

}
