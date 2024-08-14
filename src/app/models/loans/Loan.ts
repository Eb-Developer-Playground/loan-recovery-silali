import { Borrower } from './Borrower';
import { RepaymentSchedule } from './RepaymentSchedule';

export enum LoanStatus {
  Current = 'current',
  Overdue = 'overdue',
  Defaulted = 'defaulted',
  Settled = 'settled',
  WrittenOff = 'written_off',
}

export interface Loan {
  id: string;
  borrower: Borrower;
  loanAmount: number;
  interestRate: number;
  startDate: string;
  endDate: string;
  outstandingBalance: number;
  status: LoanStatus;
  repaymentSchedule?: RepaymentSchedule[];
}
