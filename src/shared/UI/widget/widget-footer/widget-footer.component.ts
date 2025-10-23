import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-widget-footer',
   templateUrl: './widget-footer.component.html',
  styleUrl: './widget-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class WidgetFooterComponent {

}
