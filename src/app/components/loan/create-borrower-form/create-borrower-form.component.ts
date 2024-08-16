import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-create-borrower-form',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatError,
    NgIf,
    TranslateModule,
  ],
  templateUrl: './create-borrower-form.component.html',
  styleUrl: './create-borrower-form.component.scss',
})
export class CreateBorrowerFormComponent {
  @Output() shouldSelectExistingBorrower = new EventEmitter<boolean>();
  @Input() formErrors: Record<string, string> = {};
  @Input() parentFormGroup: FormGroup | undefined;
}
