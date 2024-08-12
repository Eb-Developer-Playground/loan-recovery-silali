export const enum BorrowerStatus {
  Active = 'active',
  InGoodStanding = 'in_good_standing',
  PendingVerification = 'pending_verification',
  UnderReview = 'under_review',
  Delinquent = 'delinquent',
  Defaulted = 'defaulted',
  Suspended = 'suspended',
  Blacklisted = 'blacklisted',
  Rehabilitated = 'rehabilitated',
}

export interface Borrower {
  id: string;
  fullName: string;
  accountNumber: string;
  status: BorrowerStatus;
  creditScore: number;
  email?: string;
  phoneNumber?: string;
  loanCount: number;
  createdAt: Date;
  lastUpdated: Date;
  address: string;
  notes: string;
}
