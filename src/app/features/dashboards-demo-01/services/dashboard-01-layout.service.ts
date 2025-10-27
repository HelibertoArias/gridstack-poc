import { Injectable } from '@angular/core';
import { Widget01Component } from '../components/widget-01/widget-01.component';

export interface Widget{
  id: string;

  config: any;
}
export abstract class ServiceBase{
  // Base functionality for services can be added here
}

type LayoutsTypeKeys = typeof LayoutsTypes[keyof typeof LayoutsTypes]

export const LayoutsTypes = {
  Default : 'Default',
  View1 : 'View1',
  View2 : 'View2',
} as const

@Injectable( )
export class Dashboard01LayoutService  extends ServiceBase {

  private layouts: { [key:string]: Widget[]  }

  constructor() {
    super();

    this.layouts = {
      [LayoutsTypes.Default]: [
        //  { id: Widget01Component.ID, name:  config: Widget01Component.config }

      ],
      [LayoutsTypes.View1]: [],
      [LayoutsTypes.View2]: [],
    }

  }

  private initializeLayouts() {

  }

  // getLayouts(): [ [key:string], string][] {
  //   if (this.layouts.length === 0) {
  //     this.initializeLayouts();
  //   }
  //   return this.layouts;
  // }
  getLayoutByKey(key: LayoutsTypeKeys){}
}
