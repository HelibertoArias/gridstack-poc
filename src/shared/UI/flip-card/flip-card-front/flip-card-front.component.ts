import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-flip-card-front',
  template: `
  <div class="flip-card-front">
    <ng-content></ng-content>
  </div>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FlipCardFrontComponent {}
