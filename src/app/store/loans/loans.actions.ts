import { createAction, props } from '@ngrx/store';
import { Loan, LoanStatus } from '../../models/loans/Loan';

export const enum LoanActions {
  GET_LOANS = '[Loan] Get All Loans',
  GET_LOANS_SUCCESS = '[Loan] Get All Loans Success',
  FILTER_LOANS = '[Loan] Filter Loans',
  FILTER_LOAN_SUCCESS = '[Loan] Filter Loans Success',
}

interface LoanFilters {
  status: LoanStatus | null;
}
export const getLoans = createAction(LoanActions.GET_LOANS);
export const getLoansSuccess = createAction(
  LoanActions.GET_LOANS_SUCCESS,
  props<{ data: Loan[] }>(),
);

export const filterLoans = createAction(
  LoanActions.FILTER_LOANS,
  props<LoanFilters>(),
);

export const filterLoansSuccess = createAction(
  LoanActions.FILTER_LOAN_SUCCESS,
  props<{ data: Loan[] }>(),
);
