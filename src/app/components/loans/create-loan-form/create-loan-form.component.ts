import {
  Component,
  effect,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import {
  FormBuilder,
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
import { CreateBorrowerFormComponent } from '../../loan/create-borrower-form/create-borrower-form.component';
import { FormatCurrencyPipe } from '../../../pipes/format-currency.pipe';
import { z } from 'zod';
import { TranslateModule } from '@ngx-translate/core';

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
    CreateBorrowerFormComponent,
    FormatCurrencyPipe,
    TranslateModule,
  ],
  templateUrl: './create-loan-form.component.html',
  styleUrl: './create-loan-form.component.scss',
})
export class CreateLoanFormComponent {
  @Input() borrowers: Borrower[] = [];

  constructor(
    private store: Store,
    private loanService: LoanService,
  ) {
    this.handleAutocompleteFiltering();
    this.handleRepaymentCalculation();
    this.setupDynamicFormControls();
  }

  filteredOptions = of(this.borrowers);

  shouldAddNewBorrower: WritableSignal<boolean> = signal(false);

  loanRepaymentDetails: LoanRepaymentDetails | null | undefined = null;

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

  zodValidatorSchema = z.object({
    amount: z.number().min(1000),
    interestRate: z.number().min(0.1).max(100),
    paymentPeriod: z.number().min(0.1).min(1),
    paymentSchedule: z.enum([
      'monthly',
      'annually',
      'bi-annually',
      'quarterly',
    ]),
  });
  formErrors: Record<string, string> = {};

  private setupDynamicFormControls() {
    effect(() => {
      this.resetForm();
      if (this.shouldAddNewBorrower()) {
        this.addNewBorrowerControls();
        this.updateZodSchemaForNewBorrower();
      } else {
        this.addBorrowerControl();
        this.updateZodSchemaForExistingBorrower();
      }
    });
  }

  private resetForm(): void {
    this.createLoanForm.markAsPristine();
  }

  private addNewBorrowerControls() {
    this.createLoanForm.addControl(
      'newBorrowerFirstName',
      new FormControl('', Validators.required),
    );
    this.createLoanForm.addControl(
      'newBorrowerLastName',
      new FormControl('', Validators.required),
    );
    this.createLoanForm.addControl(
      'newBorrowerEmail',
      new FormControl('', [Validators.required, Validators.email]),
    );
    this.createLoanForm.addControl(
      'newBorrowerPhone',
      new FormControl('', Validators.required),
    );
    this.createLoanForm.addControl(
      'newBorrowerAddress',
      new FormControl('', Validators.required),
    );
    this.createLoanForm.addControl(
      'newBorrowerAccountNumber',
      new FormControl('', Validators.required),
    );
    this.createLoanForm.removeControl('borrower');
  }

  private addBorrowerControl() {
    this.createLoanForm.addControl(
      'borrower',
      new FormControl('', Validators.required),
    );
    this.createLoanForm.removeControl('newBorrowerFirstName');
    this.createLoanForm.removeControl('newBorrowerLastName');
    this.createLoanForm.removeControl('newBorrowerEmail');
    this.createLoanForm.removeControl('newBorrowerPhone');
    this.createLoanForm.removeControl('newBorrowerAddress');
    this.createLoanForm.removeControl('newBorrowerAccountNumber');
  }

  private updateZodSchemaForNewBorrower() {
    this.zodValidatorSchema = z.object({
      amount: z
        .number({ message: 'FIELD_REQUIRED' })
        .min(1000, 'MIN_VALIDATION_VALUE'),
      interestRate: z
        .number({ message: 'FIELD_REQUIRED' })
        .min(0.1, 'MIN_VALIDATION_VALUE')
        .max(100, 'MAX_VALIDATION_VALUE'),
      paymentPeriod: z
        .number({ message: 'FIELD_REQUIRED' })
        .min(1, 'MIN_VALIDATION_VALUE'),
      paymentSchedule: z.enum(
        ['monthly', 'annually', 'bi-annually', 'quarterly'],
        {
          message: 'INVALID_VALUE',
        },
      ),
      newBorrowerFirstName: z.string().min(1, 'FIRST_NAME_IS_REQUIRED'),
      newBorrowerLastName: z.string().min(1, 'LAST_NAME_IS_REQUIRED'),
      newBorrowerEmail: z
        .string()
        .email('INVALID_EMAIL')
        .min(1, 'EMAIL_IS_REQUIRED'),
      newBorrowerPhone: z.string().min(1, 'PHONE_IS_REQUIRED'),
      newBorrowerAddress: z.string().min(1, 'ADDRESS_IS_REQUIRED'),
      newBorrowerAccountNumber: z.string().min(1, 'ACCOUNT_NUMBER_IS_REQUIRED'),
    });
  }

  private updateZodSchemaForExistingBorrower() {
    this.zodValidatorSchema = z.object({
      borrower: z.object({}, { message: 'BORROWER_IS_REQUIRED' }).required(),
      amount: z
        .number({ message: 'FIELD_REQUIRED' })
        .min(1000, 'MIN_VALIDATION_VALUE'),
      interestRate: z
        .number({ message: 'FIELD_REQUIRED' })
        .min(0.1, 'MIN_VALIDATION_VALUE')
        .max(100, 'MAX_VALIDATION_VALUE'),
      paymentPeriod: z
        .number({ message: 'FIELD_REQUIRED' })
        .min(1, 'MIN_VALIDATION_VALUE'),
      paymentSchedule: z.enum(
        ['monthly', 'annually', 'bi-annually', 'quarterly'],
        {
          message: 'INVALID_VALUE',
        },
      ),
    });
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
    console.log(this.createLoanForm.valid, '@handleIssueLoan');
    if (this.createLoanForm.valid) {
      this.store.dispatch(
        createLoan({
          data: this.createLoanForm.value,
        }),
      );
    } else {
      try {
        console.log(this.createLoanForm.value, '@handleIssueLoan__VAlue');
        const x = this.zodValidatorSchema.parse(this.createLoanForm.value);
      } catch (e) {
        if (e instanceof z.ZodError) {
          this.parseFormErrors(e.errors);
          console.log('Validation failed:', e.errors);
        } else {
          console.error('Unexpected error:', e);
        }
      }
      this.createLoanForm.markAllAsTouched();
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

  private parseFormErrors(errors: z.ZodIssue[]) {
    this.formErrors = errors.reduce(
      (errorObject: Record<string, string>, error) => {
        errorObject[error.path[0]] = error.message;
        return errorObject;
      },
      {},
    );
  }
}
