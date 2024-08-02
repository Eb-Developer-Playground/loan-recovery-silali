import { Component, Input, signal } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { data } from 'autoprefixer';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { Loan } from '../../../models/loans/Loan';
import { LoanStatusBadgeComponent } from '../loan-status-badge/loan-status-badge.component';
import { DrawerComponent } from '../../common/drawer/drawer.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loans-table',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    NgIf,
    MatButton,
    MatNoDataRow,
    LoanStatusBadgeComponent,
    DrawerComponent,
  ],
  templateUrl: './loans-table.component.html',
  styleUrl: './loans-table.component.scss',
})
export class LoansTableComponent {
  @Input() data: Loan[] = [];

  displayedColumns: string[] = [
    'id',
    'borrower',
    'loanAmount',
    'interestRate',
    'outstandingBalance',
    'status',
  ];

  selectedItem = signal<Loan | null>(null);

  handleSelected(loan: Loan): void {
    if (this.selectedItem()?.id === loan.id) {
      this.selectedItem.set(null);
      return;
    }
    this.selectedItem.set(loan);
  }

  clearSelection(): void {
    this.selectedItem.set(null);
  }
}
