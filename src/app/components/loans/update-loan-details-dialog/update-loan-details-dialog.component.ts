import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Loan, LoanStatus } from '../../../models/loans/Loan';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { LoanStatusBadgeComponent } from '../loan-status-badge/loan-status-badge.component';
import { NgForOf } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { SnakeToSpacePipe } from '../../../pipes/snake-to-space.pipe';
import { updateLoanStatus } from '../../../store/loans/loans.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-update-loan-details-dialog',
  standalone: true,
  imports: [
    MatFormField,
    MatSelect,
    MatOption,
    NgForOf,
    MatCard,
    MatCardContent,
    MatLabel,
    ReactiveFormsModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatButton,
    SnakeToSpacePipe,
  ],
  templateUrl: './update-loan-details-dialog.component.html',
  styleUrl: './update-loan-details-dialog.component.scss',
})
export class UpdateLoanDetailsDialogComponent {
  readonly dialogRef = inject(MatDialogRef<UpdateLoanDetailsDialogComponent>);
  readonly data = inject<Loan>(MAT_DIALOG_DATA);
  readonly statusOptions = Object.values(LoanStatus);
  updateLoanDetailsForm = new FormGroup({
    status: new FormControl(this.data?.status, Validators.required),
  });

  constructor(private store: Store) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleUpdateStatus() {
    const status = this.updateLoanDetailsForm.value.status;
    if (status) {
      this.store.dispatch(updateLoanStatus({ status }));
      this.dialogRef.close();
    }
  }
}
