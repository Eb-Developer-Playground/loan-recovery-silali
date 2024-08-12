import { TestBed } from '@angular/core/testing';
import { LoanService } from './loan.service';
import { LoanRepaymentDetails } from '../../models/loans/LoanRepaymentDetails';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('LoanService', () => {
  let service: LoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoanService,
        { provide: HttpClient, useValue: { get: jest.fn(), post: jest.fn() } },
      ],
    });
    service = TestBed.inject(LoanService);
    TestBed.inject(HttpClient);
  });

  it('should calculate correct loan repayment details for monthly schedule', () => {
    const principal = 10000;
    const rate = 10;
    const time = 1;
    const schedule = 'annually';

    const expectedDetails: LoanRepaymentDetails = {
      interest: 1000,
      total: 11000,
      installments: 1,
      amountPerInstallment: 11000,
    };

    const result = service.getLoanRepaymentDetails(
      principal,
      rate,
      time,
      schedule,
    );

    expect(result.interest).toBeCloseTo(expectedDetails.interest, 6);
    expect(result.total).toBeCloseTo(expectedDetails.total, 6);
    expect(result.installments).toBe(expectedDetails.installments);
    expect(result.amountPerInstallment).toBeCloseTo(
      expectedDetails.amountPerInstallment,
      6,
    );
  });

  it('should throw an error for an invalid schedule', () => {
    const principal = 1000;
    const rate = 5;
    const time = 2;
    const schedule = 'weekly'; // Invalid schedule

    expect(() => {
      service.getLoanRepaymentDetails(principal, rate, time, schedule);
    }).toThrowError(
      "Invalid schedule. Use 'monthly', 'quarterly', 'bi-annually', or 'annually'.",
    );
  });

  // Add more test cases for other schedules if necessary
});
