import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { delay, of, range } from 'rxjs';

@Component({
  selector: 'app-change-detection-01',
  template: `hello world {{ text }}
  <button (click)="handleClick()">Click me</button>
  `,
  styles: [``],
standalone: false,
changeDetection: ChangeDetectionStrategy.OnPush

})
export class ChangeDetection01Component implements OnInit {
  text = 'Change Detection 01 Component';
  ref = inject(ChangeDetectorRef);
  constructor() { }

  ngOnInit(): void {
    this.text = 'Processing...';

    of( []).pipe(delay(6000)) .subscribe(() => {
      this.text = 'Button Clicked! ' + Math.floor(Math.random()*100);
      console.log('Text updated to:', this.text);
      this.ref.markForCheck();
    });
  }


  handleClick() {}

}
