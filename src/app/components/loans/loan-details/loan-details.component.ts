import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Loan } from '../../../models/loans/Loan';
import { LoanStatusBadgeComponent } from '../loan-status-badge/loan-status-badge.component';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-loan-details',
  standalone: true,
  imports: [LoanStatusBadgeComponent, MatButton, MatIcon],
  templateUrl: './loan-details.component.html',
})
export class LoanDetailsComponent {
  @Input() loan: Loan | null | undefined = null;
  @Output() onEditForm: EventEmitter<Loan | null | undefined> =
    new EventEmitter();
}
