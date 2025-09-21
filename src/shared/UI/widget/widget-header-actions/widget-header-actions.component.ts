import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-widget-header-actions',

  templateUrl: './widget-header-actions.component.html',
  styleUrl: './widget-header-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class WidgetHeaderActionsComponent {

}
