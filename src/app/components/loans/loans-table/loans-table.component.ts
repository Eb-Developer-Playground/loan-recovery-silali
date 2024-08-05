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
import { MatButton, MatFabButton } from '@angular/material/button';
import { Loan } from '../../../models/loans/Loan';
import { LoanStatusBadgeComponent } from '../loan-status-badge/loan-status-badge.component';
import { DrawerComponent } from '../../common/drawer/drawer.component';
import { BehaviorSubject } from 'rxjs';
import { LoanDetailsComponent } from '../loan-details/loan-details.component';
import { MatIcon } from '@angular/material/icon';
import { DataExportService } from '../../../services/common/data-export.service';

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
    LoanDetailsComponent,
    MatIcon,
    MatFabButton,
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

  constructor(private dataExportService: DataExportService) {}

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

  exportToCSV() {
    this.dataExportService.generateCSV(this.data);
  }
}
