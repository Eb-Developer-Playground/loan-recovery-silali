import { Component } from '@angular/core';
import { LoansTableComponent } from '../../components/loans/loans-table/loans-table.component';
import { LoanStatus } from '../../models/loans/Loan';
import { AsyncPipe } from '@angular/common';
import { ViewLoanDetailsWrapperComponent } from '../../components/loans/view-loan-details-wrapper/view-loan-details-wrapper.component';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { filterLoans, getLoans } from '../../store/loans/loans.actions';
import { selectDisplayableLoans } from '../../store/loans/loans.selector';
import { PageHeaderComponent } from '../../components/common/page-header/page-header.component';

@Component({
  selector: 'app-loans-page',
  standalone: true,
  imports: [
    LoansTableComponent,
    AsyncPipe,
    ViewLoanDetailsWrapperComponent,
    RouterOutlet,
    PageHeaderComponent,
  ],
  templateUrl: './loans-page.component.html',
})
export class LoansPageComponent {
  constructor(private store: Store) {}

  displayableLoans = this.store.select(selectDisplayableLoans);

  ngOnInit() {
    this.store.dispatch(getLoans());
  }

  handleStatusFilter($event: LoanStatus | null) {
    this.store.dispatch(
      filterLoans({
        status: $event,
      }),
    );
  }
}
