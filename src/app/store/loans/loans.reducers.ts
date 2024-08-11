import { createReducer, on } from '@ngrx/store';
import { Loan } from '../../models/loans/Loan';
import {
  createLoan,
  createLoanSuccess,
  deselectLoan,
  filterLoans,
  filterLoansSuccess,
  getLoans,
  getLoansSuccess,
  selectLoan,
} from './loans.actions';
import { filter } from 'rxjs';

export interface LoansState {
  loans: Loan[];
  loading: boolean;
  displayableLoans: Loan[];
  selectedLoan?: Loan | null;
  isUpdatingLoans: boolean;
}

const initialState: LoansState = {
  loans: [],
  loading: false,
  displayableLoans: [],
  selectedLoan: null,
  isUpdatingLoans: false,
};

export const loansReducer = createReducer(
  initialState,
  on(getLoans, (state) => ({ ...state, loading: true })),
  on(getLoansSuccess, (state, action) => ({
    ...state,
    loading: false,
    loans: action.data,
    displayableLoans: action.data,
  })),
  on(filterLoans, (state, filter) => {
    const filteredLoans = state.loans.filter(
      (loan) => loan.status == filter.status,
    );
    if (filter.status) {
      return { ...state, displayableLoans: filteredLoans };
    }

    return { ...state, displayableLoans: state.loans };
  }),

  on(selectLoan, (state, loan) => ({ ...state, selectedLoan: loan })),
  on(deselectLoan, (state) => ({ ...state, selectedLoan: null })),

  on(createLoan, (state) => ({ ...state, isUpdatingLoans: true })),
  on(createLoanSuccess, (state) => ({ ...state, isUpdatingLoans: false })),
);
