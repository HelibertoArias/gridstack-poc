import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-widget-05',
  standalone: false,
  templateUrl: './widget-05.component.html',
  styleUrl: './widget-05.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Widget05Component {
  title = signal('Widget 05');

}
