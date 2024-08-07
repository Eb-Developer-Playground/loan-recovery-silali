export enum RepaymentScheduleStatus {
  Paid = 'paid',
  Due = 'due',
  Overdue = 'overdue',
}
export interface RepaymentSchedule {
  date: string;
  amount: number;
  status: RepaymentScheduleStatus;
}
