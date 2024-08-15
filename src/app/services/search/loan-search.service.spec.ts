import { TestBed } from '@angular/core/testing';

import { LoanSearchService } from './loan-search.service';

describe('LoanSearchService', () => {
  let service: LoanSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
