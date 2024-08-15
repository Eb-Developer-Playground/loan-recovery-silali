import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBorrowerFormComponent } from './create-borrower-form.component';

describe('CreateBorrowerFormComponent', () => {
  let component: CreateBorrowerFormComponent;
  let fixture: ComponentFixture<CreateBorrowerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBorrowerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBorrowerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
