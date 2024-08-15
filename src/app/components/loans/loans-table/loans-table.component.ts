import {
  Component,
  effect,
  EventEmitter,
  Injector,
  Output,
  signal,
  ViewChild,
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
  MatTableDataSource,
} from '@angular/material/table';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import {
  MatButton,
  MatFabButton,
  MatIconButton,
} from '@angular/material/button';
import { Loan, LoanStatus } from '../../../models/loans/Loan';
import { LoanStatusBadgeComponent } from '../loan-status-badge/loan-status-badge.component';
import { DrawerComponent } from '../../common/drawer/drawer.component';
import { LoanDetailsComponent } from '../loan-details/loan-details.component';
import { MatIcon } from '@angular/material/icon';
import { DataExportService } from '../../../services/common/data-export.service';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatCheckbox } from '@angular/material/checkbox';
import { SnakeToSpacePipe } from '../../../pipes/snake-to-space.pipe';
import { Store } from '@ngrx/store';
import {
  selectDisplayableLoans,
  selectSelectedLoan,
} from '../../../store/loans/loans.selector';
import {
  deselectLoan,
  searchLoans,
  searchLoansNoResult,
  selectLoan,
} from '../../../store/loans/loans.actions';
import { Router } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UpdateLoanDetailsDialogComponent } from '../update-loan-details-dialog/update-loan-details-dialog.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormatCurrencyPipe } from '../../../pipes/format-currency.pipe';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { delay } from 'rxjs';
import { TableEmptyStateComponent } from '../../../common/table-empty-state/table-empty-state.component';

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
    AsyncPipe,
    MatPaginator,
    TranslateModule,
    FormatCurrencyPipe,
    MatFormField,
    MatInput,
    MatLabel,
    MatIconButton,
    ReactiveFormsModule,
    MatPaginatorModule,
    TableEmptyStateComponent,
  ],
  templateUrl: './loans-table.component.html',
  styleUrl: './loans-table.component.scss',
})
export class LoansTableComponent {
  displayableLoans = this.store.select(selectDisplayableLoans);
  private data: Loan[] = [];
  @Output() statusSelected = new EventEmitter<LoanStatus | null>();
  searchFormControl = new FormControl('');
  dataSource = new MatTableDataSource<Loan>();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private dataExportService: DataExportService,
    private injector: Injector,
    private store: Store,
    private router: Router,
    private dialog: MatDialog,
  ) {
    this.displayableLoans.subscribe({
      next: (data) => {
        this.data = data;
        this.dataSource = new MatTableDataSource<Loan, MatPaginator>(data);
      },
    });
    this.handleSearch();
  }

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

  selectedItem = this.store.select(selectSelectedLoan);

  private statusEffect = effect(
    () => {
      this.statusSelected.emit(this.selectedStatus());
    },
    {
      injector: this.injector,
    },
  );

  handleSelected(loan: Loan): void {
    this.router.navigate(['/loans', loan.id]);
    this.store.dispatch(selectLoan(loan));
  }

  handleDrawerClose() {
    this.store.dispatch(deselectLoan());
  }

  handleStatusSelected(status: LoanStatus | null): void {
    if (this.selectedStatus() === status) {
      this.selectedStatus.set(null);
    }
    this.selectedStatus.set(status);
  }

  exportToCSV() {
    this.dataExportService.toCSV(
      this.data.map((loan) => {
        return {
          loanNumber: loan.id,
          borrower: `${loan.borrower.fullName}`,
          amount: `${loan.loanAmount}`,
          status: loan.status,
          interest: `${loan.interestRate}`,
        };
      }),
    );
  }

  handleAddLoan() {
    this.router.navigate(['/loans', 'u', 'create']);
  }

  handleFormEditing($event: Loan | null | undefined) {
    if ($event) {
      this.openEditingDialog($event);
    }
  }

  private openEditingDialog(loan: Loan): void {
    const dialogRef = this.dialog.open(UpdateLoanDetailsDialogComponent, {
      data: loan,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  private handleSearch() {
    this.searchFormControl.valueChanges.pipe(delay(500)).subscribe({
      next: (query) => {
        if (query) {
          this.store.dispatch(
            searchLoans({
              query,
            }),
          );
        } else {
          this.store.dispatch(searchLoansNoResult());
        }
      },
    });
  }
}
