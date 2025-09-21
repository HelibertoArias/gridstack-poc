import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-flip-card-back',
  template: `
    <div class="flip-card-back">
      <ng-content></ng-content>
    </div>
  `,
  imports: [],

  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FlipCardBackComponent {}
