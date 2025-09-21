import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-flip-card',
  imports: [CommonModule, MatIconModule],
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class FlipCardComponent implements OnInit {
  toggleProperty = false;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }
}
