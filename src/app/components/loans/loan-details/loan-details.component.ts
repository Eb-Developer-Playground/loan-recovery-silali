import { Component, Input } from '@angular/core';
import { Loan } from '../../../models/loans/Loan';
import { LoanStatusBadgeComponent } from '../loan-status-badge/loan-status-badge.component';

@Component({
  selector: 'app-loan-details',
  standalone: true,
  imports: [LoanStatusBadgeComponent],
  templateUrl: './loan-details.component.html',
  styleUrl: './loan-details.component.scss',
})
export class LoanDetailsComponent {
  @Input() loan: Loan | null = null;
}
