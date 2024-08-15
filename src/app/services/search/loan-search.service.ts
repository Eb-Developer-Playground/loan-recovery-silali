import { Injectable } from '@angular/core';
import { Loan } from '../../models/loans/Loan';
import Fuse from 'fuse.js';

@Injectable({
  providedIn: 'root',
})
export class LoanSearchService {
  private fuse: Fuse<Loan> | undefined;

  setData(data: Loan[]) {
    this.fuse = new Fuse(data, {
      includeScore: true,
      threshold: 0.1,
      distance: 100,
      minMatchCharLength: 3,
      ignoreLocation: false,
      keys: ['borrower.fullName', 'id', 'borrower.accountNumber'],
    });
  }

  async search(query: string) {
    if (this.fuse === undefined) {
      throw new Error('Data not set');
    }
    try {
      return this.fuse.search(query);
    } catch (error) {
      console.error('Search failed:', error);
      return [];
    }
  }
}
