import {
  Component,
  effect,
  EventEmitter,
  Injector,
  Input,
  Output,
  signal,
} from '@angular/core';
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
import { NgForOf, NgIf } from '@angular/common';
import { MatButton, MatFabButton } from '@angular/material/button';
import { Loan, LoanStatus } from '../../../models/loans/Loan';
import { LoanStatusBadgeComponent } from '../loan-status-badge/loan-status-badge.component';
import { DrawerComponent } from '../../common/drawer/drawer.component';
import { LoanDetailsComponent } from '../loan-details/loan-details.component';
import { MatIcon } from '@angular/material/icon';
import { DataExportService } from '../../../services/common/data-export.service';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatCheckbox } from '@angular/material/checkbox';
import { SnakeToSpacePipe } from '../../../pipes/snake-to-space.pipe';

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
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatCheckbox,
    NgForOf,
    SnakeToSpacePipe,
  ],
  templateUrl: './loans-table.component.html',
  styleUrl: './loans-table.component.scss',
})
export class LoansTableComponent {
  @Input() data: Loan[] = [];
  @Output() statusSelected = new EventEmitter<LoanStatus | null>();

  displayedColumns: string[] = [
    'id',
    'borrower',
    'loanAmount',
    'interestRate',
    'outstandingBalance',
    'status',
  ];

  statuses: LoanStatus[] = Object.values(LoanStatus);

  selectedStatus = signal<LoanStatus | null>(null);

  selectedItem = signal<Loan | null>(null);

  private statusEffect = effect(
    () => {
      this.statusSelected.emit(this.selectedStatus());
    },
    {
      injector: this.injector,
    },
  );

  constructor(
    private dataExportService: DataExportService,
    private injector: Injector,
  ) {}

  handleSelected(loan: Loan): void {
    if (this.selectedItem()?.id === loan.id) {
      this.selectedItem.set(null);
      return;
    }
    this.selectedItem.set(loan);
  }

  handleStatusSelected(status: LoanStatus | null): void {
    if (this.selectedStatus() === status) {
      this.selectedStatus.set(null);
    }
    this.selectedStatus.set(status);
  }

  clearSelection(): void {
    this.selectedItem.set(null);
  }

  exportToCSV() {
    this.dataExportService.toCSV(
      this.data.map((loan) => {
        return {
          loanNumber: loan.id,
          borrower: `${loan.borrower.firstName} ${loan.borrower.lastName}`,
          amount: `${loan.loanAmount}`,
          status: loan.status,
          interest: `${loan.interestRate}`,
        };
      }),
    );
  }

  exportToPdf() {
    this.dataExportService.toPdf(this.data);
  }
}
