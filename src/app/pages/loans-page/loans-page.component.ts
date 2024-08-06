import { Component, signal } from '@angular/core';
import { LoansTableComponent } from '../../components/loans/loans-table/loans-table.component';
import { HttpClient } from '@angular/common/http';
import { LoanService } from '../../services/loans/loan.service';
import { BehaviorSubject } from 'rxjs';
import { Loan, LoanStatus } from '../../models/loans/Loan';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loans-page',
  standalone: true,
  imports: [LoansTableComponent, AsyncPipe],
  templateUrl: './loans-page.component.html',
  styleUrl: './loans-page.component.scss',
})
export class LoansPageComponent {
  constructor(private loanService: LoanService) {}

  loans = signal<Loan[]>([]);

  displayableLoans = signal<Loan[]>([]);

  ngOnInit() {
    this.loanService.fetchLoans().subscribe({
      next: (data) => {
        this.loans.set(data as Loan[]);
        this.displayableLoans.set(data as Loan[]);
      },
    });
  }

  handleStatusFilter($event: LoanStatus | null) {
    if ($event == null) {
      this.displayableLoans.set(this.loans());
      return;
    }
    return this.displayableLoans.set(
      this.loans().filter((loan) => loan.status === $event),
    );
  }
}
