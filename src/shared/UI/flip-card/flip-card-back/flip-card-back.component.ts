import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-flip-card-back',
  template: `
    <div class="flip-card-back">
      <ng-content></ng-content>
    </div>
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FlipCardBackComponent {}
