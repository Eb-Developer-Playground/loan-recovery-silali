import { Component, Input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [MatCard, MatCardContent],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.scss',
})
export class StatCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
}
