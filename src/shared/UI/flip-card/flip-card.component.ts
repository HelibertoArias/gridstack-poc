import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
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

  toggleProperty = false;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }
}
