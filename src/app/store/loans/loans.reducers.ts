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
  updateLoanStatus,
} from './loans.actions';
import { filter } from 'rxjs';

export interface LoansState {
  loans: Loan[];
  loading: boolean;
  displayableLoans: Loan[];
  selectedLoan?: Loan | null;
  isUpdatingLoans: boolean;
}

export const loansInitialState: LoansState = {
  loans: [],
  loading: false,
  displayableLoans: [],
  selectedLoan: null,
  isUpdatingLoans: false,
};

export const loansReducer = createReducer(
  loansInitialState,
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
  on(updateLoanStatus, (state, { status }) => {
    const selectedLoan = state.selectedLoan;
    if (selectedLoan) {
      const copyOfLoan = { ...selectedLoan };
      copyOfLoan.status = status;
      return {
        ...state,
        selectedLoan: copyOfLoan,
        loans: state.loans.map((obj) =>
          obj.id === selectedLoan.id ? { ...obj, status: status } : obj,
        ), //updating the loan in the loan list.
        displayableLoans: state.displayableLoans.map((obj) =>
          obj.id === selectedLoan.id ? { ...obj, status: status } : obj,
        ),
      };
    }
    return state;
  }),
);
