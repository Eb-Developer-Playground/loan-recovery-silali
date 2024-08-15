import { createAction, props } from '@ngrx/store';
import { Loan, LoanStatus } from '../../models/loans/Loan';
import { CreateLoanFormData } from '../../models/loans/CreateLoanFormData';

export const enum LoanActions {
  GET_LOANS = '[Loan] Get All Loans',
  GET_LOANS_SUCCESS = '[Loan] Get All Loans Success',
  FILTER_LOANS = '[Loan] Filter Loans',
  FILTER_LOAN_SUCCESS = '[Loan] Filter Loans Success',
  SELECT_LOAN = '[Loan] Select Loan',
  DESELECT_LOAN = '[Loan] Deselect Loan',
  CREATE_LOAN = '[Loan] Create Loan',
  CREATE_LOAN_SUCCESS = '[Loan] Create Loan Success',
  UPDATE_LOAN_STATUS = '[Loan] Update Loan Status',
  SEARCH_LOANS = '[Loan] Search Loans',
  SEARCH_LOANS_SUCCESS = '[Loan] Search Loans Success',
  SEARCH_LOANS_ERROR = '[Loan] Search Loans Error',
  SEARCH_LOANS_NO_RESULTS = '[Loan] Search Loans No Result',
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

export const selectLoan = createAction(LoanActions.SELECT_LOAN, props<Loan>());

export const deselectLoan = createAction(LoanActions.DESELECT_LOAN);

export const createLoan = createAction(
  LoanActions.CREATE_LOAN,
  props<{ data: CreateLoanFormData }>(),
);

export const createLoanSuccess = createAction(LoanActions.CREATE_LOAN_SUCCESS);

export const updateLoanStatus = createAction(
  LoanActions.UPDATE_LOAN_STATUS,
  props<{ status: LoanStatus }>(),
);

export const searchLoans = createAction(
  LoanActions.SEARCH_LOANS,
  props<{ query: string }>(),
);

export const searchLoansSuccess = createAction(
  LoanActions.SEARCH_LOANS_SUCCESS,
  props<{ searchResults: Loan[] }>(),
);

export const searchLoansNoResult = createAction(
  LoanActions.SEARCH_LOANS_NO_RESULTS,
);

export const searchLoansError = createAction(LoanActions.SEARCH_LOANS_ERROR);
