import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GridStackOptions } from 'gridstack';
import { GridstackComponent, GridstackItemComponent } from 'gridstack/dist/angular';

@Component({
  selector: 'app-demo-01',
  standalone: true,
  templateUrl: './demo-01.component.html',
  styleUrl: './demo-01.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    GridstackComponent,
    GridstackItemComponent
  ]
})
export class Demo01Component {
 // sample grid options + items to load...
  public gridOptions: GridStackOptions = {
    margin: 5,
    children: [ // or call load(children) or addWidget(children[0]) with same data
      {x:0, y:0, minW:2, content:'Item 1'},
      {x:1, y:0, content:'Item 2'},
      {x:0, y:1, content:'Item 3'},
    ]
  }
}
