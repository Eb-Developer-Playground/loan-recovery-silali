import { Component, Input } from '@angular/core';
import { SnakeToSpacePipe } from '../../../pipes/snake-to-space.pipe';

@Component({
  selector: 'app-loan-status-badge',
  standalone: true,
  imports: [SnakeToSpacePipe],
  templateUrl: './loan-status-badge.component.html',
  styleUrl: './loan-status-badge.component.scss',
})
export class LoanStatusBadgeComponent {
  @Input() status: string = '';
}
