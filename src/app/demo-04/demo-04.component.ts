import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WidgetComponent } from '../../shared/UI/widget/widget.component';

@Component({
  selector: 'app-demo-04',
  standalone: false,
  templateUrl: './demo-04.component.html',
  styleUrl: './demo-04.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Demo04Component {

}
