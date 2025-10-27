import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-widget-04',
  standalone: false,
  templateUrl: './widget-04.component.html',
  styleUrl: './widget-04.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Widget04Component {
  title = signal('Widget 04');

}
