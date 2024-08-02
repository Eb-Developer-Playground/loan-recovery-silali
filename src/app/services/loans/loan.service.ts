import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Loan } from '../../models/loans/Loan';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  constructor(private http: HttpClient) {}

  fetchLoans() {
    return this.http.get('http://localhost:4400/api/loans');
  }
}
