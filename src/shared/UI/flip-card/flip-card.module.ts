import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlipCardBackComponent } from './flip-card-back/flip-card-back.component';
import { FlipCardFrontComponent } from './flip-card-front/flip-card-front.component';
import { FlipCardComponent } from './flip-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FlipCardComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent,
  ],
  imports: [CommonModule, MatIconModule],
  exports: [FlipCardComponent, FlipCardFrontComponent, FlipCardBackComponent],
})
export class FlipCardModule {}
