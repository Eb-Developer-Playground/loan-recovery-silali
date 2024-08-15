import { loansInitialState, loansReducer } from '../loans.reducers';
import { filterLoans, getLoans, updateLoanStatus } from '../loans.actions';
import { LoanStatus } from '../../../models/loans/Loan';
import {
  CURRENT_STATE_filterLoans,
  CURRENT_STATE_updateLoanStatus,
} from './stubs';

describe('Loans Reducers', () => {
  it('should update loading state to true while getting loans', () => {
    const newState = loansReducer(loansInitialState, getLoans());
    expect(newState.loading).toBe(true);
  });
  it('should update selected loan status correctly', () => {
    const newState = loansReducer(
      CURRENT_STATE_updateLoanStatus,
      updateLoanStatus({
        status: LoanStatus.WrittenOff,
      }),
    );
    expect(newState.selectedLoan?.status).toBe(LoanStatus.WrittenOff);
    expect(newState.loans[0]?.status).toBe(LoanStatus.WrittenOff);
    expect(newState.displayableLoans[0]?.status).toBe(LoanStatus.WrittenOff);
  });
  it('should filter loans correctly', () => {
    const newState = loansReducer(
      CURRENT_STATE_filterLoans,
      filterLoans({
        status: LoanStatus.WrittenOff,
      }),
    );

    expect(newState.displayableLoans.length).toEqual(1);
  });
});
