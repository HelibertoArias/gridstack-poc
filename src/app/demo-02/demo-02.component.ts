import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  BaseWidget,
  GridstackComponent,
  GridstackItemComponent,
  NgCompInputs,
  NgGridStackOptions,
  NgGridStackWidget,
  nodesCB,
} from 'gridstack/dist/angular';
import { ViewChild } from '@angular/core';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  /**
   *
   */
  constructor() {
    console.log('DashboardService created');
  }

  public title1Subject = new BehaviorSubject<string>('hello');


}

// some custom components
@Component({
  selector: 'app-a',
  template: 'Comp A {{text}} -- Title {{title1}}',
 })
export class AComponent extends BaseWidget implements OnDestroy , OnInit {
  constructor(private readonly dashboardService: DashboardService) {
    super();
  }
  ngOnInit(): void {
    this.dashboardService.title1Subject.subscribe((t) => (this.title1 = t));
  }
  @Input() text: string = 'defaul-value'; // test custom input data

  title1: string = '';

  public override serialize(): NgCompInputs | undefined {
    return this.text ? { text: this.text } : undefined;
  }

  public override deserialize(w: NgGridStackWidget) {
    console.log('AComponent deserialize', w);
    console.log('AComponent input', w.input);
    // save full description for meta data
    this.widgetItem = w;
    if (!w) return;

    if (w.input) Object.assign(this, w.input);
  }

  ngOnDestroy() {
    console.log('Comp A destroyed'); // test to make sure cleanup happens
  }
}

@Component({
  selector: 'app-b',
  template: 'Comp B',
 })
export class BComponent extends BaseWidget {}

@Component({
  selector: 'app-demo-02',
  standalone: true,
  templateUrl: './demo-02.component.html',
  styleUrl: './demo-02.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GridstackComponent, GridstackItemComponent],
  providers: [DashboardService], // per demo instance
})
export class Demo02Component {


  @ViewChild(GridstackComponent) gridstack?: GridstackComponent;

  @ViewChild(GridstackComponent) acomponent?: AComponent;

  constructor(private readonly dashboardService: DashboardService) {
    // register all our dynamic components types created by the grid
    GridstackComponent.addComponentToSelectorType([AComponent, BComponent]);
  }

  public gridOptions: NgGridStackOptions = {
    margin: 5,
    minRow: 4, // make space for empty message
    column: 4,
    cellHeight: 70,
    removable: '.trash',
    acceptWidgets: true,
    float: true,
    columnOpts: { breakpoints: [{ w: 768, c: 1 }] },
    children: [
      // or call load()/addWidget() with same data
      // { x: 0, y: 1, minW: 2, selector: 'app-a' },
      { x: 1, y: 2, minW: 2, selector: 'app-a', input: { text: 'bar' } }, // custom input that works using BaseWidget.deserialize() Object.assign(this, w.input)
      { x: 2, y: 3, selector: 'app-b' },
      { x: 3, y: 4, content: 'plain html' },
    ],
  };

  // called whenever items change size/position/etc.. see other events
  public onChange(data: nodesCB) {
    console.log('change ', data.nodes.length > 1 ? data.nodes : data.nodes[0]);
  }

  protected deleteCmponentA() {
    this.removeItem(0);
  }
  public deleteCmponentB() {
    this.removeItem(0);
  }
  public deleteCmponentC() {
    this.removeItem(0);
  }

  public removeItem(index: number) {
    const grid = this.gridstack?.grid;
    if (grid && this.gridOptions.children && this.gridOptions.children[index]) {
      // Buscar el gridstack-item correspondiente
      const items = document.querySelectorAll('.grid-stack-item');
      const el = items[index] as HTMLElement;
      if (el) {
        grid.removeWidget(el);
      }
      // Remover del array children
      this.gridOptions.children.splice(index, 1);
    }
  }

  public clear(): void {
    const grid = this.gridstack?.grid;
    if (grid) {
      grid.removeAll();
      if (this.gridOptions.children) {
        this.gridOptions.children = [];
      }
    }
  }

  public addAComponent(): void {
    if (this.gridOptions.children) {
      this.gridOptions.children.push({
        x: 0,
        y: 0,
        minW: 2,
        selector: 'app-a',
        input: { text: 'new instance' },
      });
      this.gridstack?.grid?.addWidget(
        this.gridOptions.children[this.gridOptions.children.length - 1]
      );
    }
  }

  public updateAComponentInput(): void {
    this.dashboardService.title1Subject.next('Title ' + new Date().toLocaleTimeString());
    if (this.gridOptions.children && this.gridOptions.children.length > 0) {
      const item = this.gridOptions.children.find(
        (item) => item.selector === 'app-a'
      );
      console.log('updateAComponentInput', item);

      if (item) {
        item.input = { text: 'new eeee 1' };

        this.gridstack?.grid?.commit();
        console.log('updateAComponentInput', item);
      }
    }


    // if (this.gridOptions.children && this.gridOptions.children.length > 0) {
    //   const aComponentItem = this.gridOptions.children[0];
    //   if (aComponentItem && aComponentItem.selector === 'app-a') {
    //     // Update the input property
    //     aComponentItem.input = { text: 'updated-value' };
    //     // Refresh the grid to apply changes
    //     this.gridstack?.grid?.update(aComponentItem, { text: 'updated-value' });
    //   }
    // }
  }
}
