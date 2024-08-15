export interface CreateLoanFormData {
  borrowerId: string;
  amount: number;
  interestRate: number;
  repaymentPeriodId: string;
  paymentScheduleId: string;
}
