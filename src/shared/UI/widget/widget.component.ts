import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-widget',

  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class WidgetComponent {}
