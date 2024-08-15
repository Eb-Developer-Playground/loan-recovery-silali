import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Loan } from '../../../models/loans/Loan';
import { LoanStatusBadgeComponent } from '../loan-status-badge/loan-status-badge.component';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NgForOf, NgIf } from '@angular/common';
import { FormatCurrencyPipe } from '../../../pipes/format-currency.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { TableEmptyStateComponent } from '../../../common/table-empty-state/table-empty-state.component';

@Component({
  selector: 'app-loan-details',
  standalone: true,
  imports: [
    LoanStatusBadgeComponent,
    MatButton,
    MatIcon,
    NgForOf,
    NgIf,
    FormatCurrencyPipe,
    TranslateModule,
    TableEmptyStateComponent,
  ],
  templateUrl: './loan-details.component.html',
})
export class LoanDetailsComponent {
  @Input() loan: Loan | null | undefined = null;
  @Output() onEditForm: EventEmitter<Loan | null | undefined> =
    new EventEmitter();
}
