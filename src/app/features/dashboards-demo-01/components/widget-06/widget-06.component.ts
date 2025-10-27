import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-widget-06',
  standalone: false,
  templateUrl: './widget-06.component.html',
  styleUrl: './widget-06.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Widget06Component {
  title = signal('Widget 06');

}
