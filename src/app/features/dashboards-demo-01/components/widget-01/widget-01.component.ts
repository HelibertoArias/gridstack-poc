import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Widget } from '../../services/dashboard-01-layout.service';

@Component({
  selector: 'app-widget-01',
  standalone: false,
  templateUrl: './widget-01.component.html',
  styleUrl: './widget-01.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Widget01Component  {

  static readonly ID = 'Widget01';

  title = signal('Widget 01');


}
