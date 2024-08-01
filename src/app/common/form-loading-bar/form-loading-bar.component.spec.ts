import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLoadingBarComponent } from './form-loading-bar.component';

describe('FormLoadingBarComponent', () => {
  let component: FormLoadingBarComponent;
  let fixture: ComponentFixture<FormLoadingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLoadingBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
