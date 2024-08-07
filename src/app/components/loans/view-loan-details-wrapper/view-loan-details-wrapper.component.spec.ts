import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoanDetailsWrapperComponent } from './view-loan-details-wrapper.component';

describe('ViewLoanDetailsWrapperComponent', () => {
  let component: ViewLoanDetailsWrapperComponent;
  let fixture: ComponentFixture<ViewLoanDetailsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewLoanDetailsWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLoanDetailsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
