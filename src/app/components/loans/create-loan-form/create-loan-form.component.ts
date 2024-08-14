import { Component, Input } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSelect } from '@angular/material/select';
import { SelectedBorrowerDisplayComponent } from '../selected-borrower-display/selected-borrower-display.component';
import { Borrower } from '../../../models/loans/Borrower';
import { createLoan } from '../../../store/loans/loans.actions';
import { selectIsUpdatingLoans } from '../../../store/loans/loans.selector';
import { Store } from '@ngrx/store';
import { map, of, startWith } from 'rxjs';
import { LoanService } from '../../../services/loans/loan.service';
import { LoanRepaymentDetails } from '../../../models/loans/LoanRepaymentDetails';
import { paymentScheduleValidator } from '../../../validators/paymentScheduleValidator';

@Component({
  selector: 'app-create-loan-form',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatProgressSpinner,
    MatSelect,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    SelectedBorrowerDisplayComponent,
    MatError,
  ],
  templateUrl: './create-loan-form.component.html',
  styleUrl: './create-loan-form.component.scss',
})
export class CreateLoanFormComponent {
  @Input() borrowers: Borrower[] = [];

  filteredOptions = of(this.borrowers);

  loanRepaymentDetails: LoanRepaymentDetails | null | undefined = null;

  public $errors: ValidationErrors | null = null;

  createLoanForm: FormGroup = new FormGroup({
    amount: new FormControl(0, [Validators.required, Validators.min(1000)]),
    interestRate: new FormControl(0, [
      Validators.required,
      Validators.min(0.1),
      Validators.max(100),
    ]),
    paymentPeriod: new FormControl(1, [Validators.required, Validators.min(1)]),
    paymentSchedule: new FormControl('monthly', [
      Validators.required,
      paymentScheduleValidator(),
    ]),
    borrower: new FormControl(null, Validators.required),
  });

  constructor(
    private store: Store,
    private loanService: LoanService,
  ) {
    this.handleAutocompleteFiltering();
    this.handleRepaymentCalculation();
  }

  isUpdatingLoans = this.store.select(selectIsUpdatingLoans);

  autocompleteFormControl = new FormControl<string>('');

  trackFn(index: number, borrower: Borrower) {
    return borrower.id;
  }

  displayFn(borrower: Borrower): string {
    return borrower ? borrower.fullName : '';
  }

  handleIssueLoan() {
    if (this.createLoanForm.valid) {
      this.store.dispatch(
        createLoan({
          data: this.createLoanForm.value,
        }),
      );
    } else {
      let x = Object.keys(this.createLoanForm.controls).reduce(
        (
          previousValue: Record<string, any>,
          currentValue,
          currentIndex,
        ): Record<string, any> => {
          previousValue[currentValue] =
            this.createLoanForm.get(currentValue)?.errors;
          return previousValue;
        },
        {},
      );
      console.log({ hugo: x });
    }
  }

  handleBorrowerSelected($event: MatAutocompleteSelectedEvent) {
    this.createLoanForm.get('borrower')?.setValue($event.option.value);
  }

  private filter(value: string): Borrower[] {
    if (value.length > 0) {
      const filterValue = value.toLowerCase();

      return this.borrowers.filter((option) =>
        option.fullName.toLowerCase().includes(filterValue),
      );
    }

    return this.borrowers;
  }

  handleAutocompleteFiltering() {
    this.filteredOptions = this.autocompleteFormControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        if (value) {
          return this.filter(value);
        }

        return this.borrowers;
      }),
    );
  }

  handleRepaymentCalculation() {
    this.createLoanForm.valueChanges.subscribe({
      next: (value: any) => {
        const { amount, interestRate, paymentPeriod, paymentSchedule } = value;
        if (
          amount > 0 &&
          interestRate > 0 &&
          paymentPeriod &&
          paymentSchedule
        ) {
          this.loanRepaymentDetails = this.loanService.getLoanRepaymentDetails(
            amount,
            interestRate,
            paymentPeriod,
            paymentSchedule,
          );
          console.log(this.loanRepaymentDetails, '__');
        } else {
          this.loanRepaymentDetails = null;
        }
      },
    });
  }

  handleFormErrors() {}
}
