import { ChangeDetectionStrategy, Component, Input, linkedSignal, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-sample-01-widget',
  standalone: false,
  templateUrl: './sample-01-widget.component.html',
  styleUrl: './sample-01-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sample01WidgetComponent implements OnInit {

  protected title = signal('Sample 01 Widget');
  protected subtitle = signal('Sample 01 Widget Subtitle');




  constructor() {}
  ngOnInit(): void {}
}
