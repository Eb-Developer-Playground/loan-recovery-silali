import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateLoanFormData } from '../../models/loans/CreateLoanFormData';
import { LoanRepaymentDetails } from '../../models/loans/LoanRepaymentDetails';
import { create } from '@orama/orama';

interface CompoundInterest {
  amount: number;
  installments: number;
}

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  constructor(private http: HttpClient) {}

  fetchLoans(): Observable<any> {
    return this.http.get('http://localhost:4400/api/loans');
  }

  createLoan(data: CreateLoanFormData) {
    return this.http.post('http://localhost:4400/api/loans', data);
  }

  calculateCompoundInterest(
    principal: number,
    rate: number,
    time: number,
    schedule: string,
  ): CompoundInterest {
    const annualRate = rate / 100;

    let n: number;
    switch (schedule.toLowerCase()) {
      case 'monthly':
        n = 12;
        break;
      case 'quarterly':
        n = 4;
        break;
      case 'bi-annually':
        n = 2;
        break;
      case 'annually':
        n = 1;
        break;
      default:
        throw new Error(
          "Invalid schedule. Use 'monthly', 'quarterly', 'bi-annually', or 'annually'.",
        );
    }

    return {
      amount: principal * Math.pow(1 + annualRate / n, n * time),
      installments: n,
    };
  }

  getLoanRepaymentDetails(
    principal: number,
    rate: number,
    time: number,
    schedule: string,
  ): LoanRepaymentDetails {
    const { amount, installments } = this.calculateCompoundInterest(
      principal,
      rate,
      time,
      schedule,
    );
    const interest = amount - principal;
    return {
      interest: interest,
      total: amount,
      installments,
      amountPerInstallment: amount / installments,
    };
  }
}
