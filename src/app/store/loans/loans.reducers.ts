import { createReducer, on } from '@ngrx/store';
import { Loan } from '../../models/loans/Loan';
import {
  filterLoans,
  filterLoansSuccess,
  getLoans,
  getLoansSuccess,
} from './loans.actions';

export interface LoansState {
  loans: Loan[];
  loading: boolean;
  displayableLoans: Loan[];
  selectedLoan?: Loan | null;
}

const initialState: LoansState = {
  loans: [],
  loading: false,
  displayableLoans: [],
  selectedLoan: null,
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
    return { ...state, displayableLoans: filteredLoans };
  }),
);
