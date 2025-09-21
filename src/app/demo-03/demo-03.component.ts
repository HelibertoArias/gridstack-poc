import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-demo-03',
  standalone: false,
  templateUrl: './demo-03.component.html',
  styleUrl: './demo-03.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Demo03Component {

}
