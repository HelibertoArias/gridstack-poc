import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-widget-03',
  standalone: false,
  templateUrl: './widget-03.component.html',
  styleUrl: './widget-03.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Widget03Component {
  title = signal('Widget 03');

}
