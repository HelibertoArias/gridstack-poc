import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FlipCardComponent implements OnInit {
  showToggleButtons = input<boolean>(true);

  toggleProperty = signal<boolean>(false) ;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.toggleProperty.update((current) => !current);
  }
}
