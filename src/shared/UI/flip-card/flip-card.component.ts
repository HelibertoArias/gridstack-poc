import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-flip-card',
   templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class FlipCardComponent implements OnInit {
  toggleProperty = false;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }
}
