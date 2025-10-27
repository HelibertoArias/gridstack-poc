import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-widget-02',
  standalone: false,
  templateUrl: './widget-02.component.html',
  styleUrl: './widget-02.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Widget02Component {
  title = signal('Widget 02');

}
