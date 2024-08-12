import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../common/page-header/page-header.component';
import { MatCard, MatCardContent } from '@angular/material/card';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { MatAnchor, MatButton } from '@angular/material/button';
import { map, Observable, of, startWith } from 'rxjs';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { createLoan } from '../../../store/loans/loans.actions';
import { selectIsUpdatingLoans } from '../../../store/loans/loans.selector';
import { ValidationService } from '../../../services/common/validation.service';
import { BorrowerSelectOption } from '../../../models/loans/BorrowerSelectOption';
import { SelectedBorrowerDisplayComponent } from '../../loans/selected-borrower-display/selected-borrower-display.component';
import { Borrower } from '../../../models/loans/Borrower';
import { BorrowerService } from '../../../services/borrower/borrower.service';
import { CreateLoanFormComponent } from '../../loans/create-loan-form/create-loan-form.component';

@Component({
  selector: 'app-create-loan-page',
  standalone: true,
  imports: [
    PageHeaderComponent,
    MatCard,
    MatCardContent,
    FormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    NgForOf,
    MatLabel,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatAnchor,
    AsyncPipe,
    MatButton,
    MatProgressSpinner,
    NgIf,
    MatError,
    SelectedBorrowerDisplayComponent,
    CreateLoanFormComponent,
  ],
  templateUrl: './create-loan-page.component.html',
  styleUrl: './create-loan-page.component.scss',
})
export class CreateLoanPageComponent {
  borrowers: Borrower[] = [];

  constructor(private borrowerService: BorrowerService) {
    this.fetchBorrowers();
  }

  fetchBorrowers() {
    this.borrowerService.fetchBorrowers().subscribe({
      next: (data) => {
        this.borrowers = data;
      },
    });
  }
}
