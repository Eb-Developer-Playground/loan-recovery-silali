export enum RepaymentScheduleStatus {
  Paid = 'paid',
  Due = 'due',
  Overdue = 'overdue',
}
export interface Repayment {
  date: string;
  amount: number;
  status: RepaymentScheduleStatus;
}
