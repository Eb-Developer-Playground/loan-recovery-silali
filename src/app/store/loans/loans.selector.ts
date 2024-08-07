import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoansState } from './loans.reducers';

export const selectLoansState = createFeatureSelector<LoansState>('loans');

export const loansSelector = createSelector(
  selectLoansState,
  (state: LoansState) => state.loans,
);

export const selectDisplayableLoans = createSelector(
  selectLoansState,
  (state: LoansState) => state.displayableLoans,
);

export const selectSelectedLoan = createSelector(
  selectLoansState,
  (state: LoansState) => state.selectedLoan,
);
