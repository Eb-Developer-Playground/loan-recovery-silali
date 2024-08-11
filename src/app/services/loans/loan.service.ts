import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Loan } from '../../models/loans/Loan';
import { CreateLoanFormData } from '../../models/loans/CreateLoanFormData';

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
}
