import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-widget-01',
  standalone: false,
  templateUrl: './widget-01.component.html',
  styleUrl: './widget-01.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Widget01Component {

  title = signal('Widget 01');


}
