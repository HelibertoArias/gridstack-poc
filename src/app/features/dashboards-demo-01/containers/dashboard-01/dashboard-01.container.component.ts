import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: false,
  templateUrl: './dashboard-01.container.component.html',
  styleUrl: './dashboard-01.container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard01ContainerComponent {

}
