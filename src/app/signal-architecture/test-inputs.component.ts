import { ChangeDetectionStrategy, Component, Input, input, OnInit } from '@angular/core';
import { User } from './siganal-on-services/user-model';

@Component({
  selector: 'app-test-inputs',
  template: `<p>Test Inputs Component</p>
  User: {{ user?.firstName }} {{ user?.lastName }}
  `,
  styles: [``],
  standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TestInputsComponent implements OnInit {
 @Input() user: User | undefined ;

//  user = input<User>()

  constructor() { }

  ngOnInit(): void { }
}
