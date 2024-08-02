import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanStatusBadgeComponent } from './loan-status-badge.component';

describe('LoanStatusBadgeComponent', () => {
  let component: LoanStatusBadgeComponent;
  let fixture: ComponentFixture<LoanStatusBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanStatusBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanStatusBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
