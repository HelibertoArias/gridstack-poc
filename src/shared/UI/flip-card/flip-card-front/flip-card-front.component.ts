import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-flip-card-front',
  template: `
  <div class="flip-card-front">
    <ng-content></ng-content>
  </div>
  `,
  imports: [],

  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FlipCardFrontComponent {}
