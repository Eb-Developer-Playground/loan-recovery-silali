import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-borrower-form',
  standalone: true,
  imports: [MatFormField, MatInput, MatLabel, ReactiveFormsModule],
  templateUrl: './create-borrower-form.component.html',
  styleUrl: './create-borrower-form.component.scss',
})
export class CreateBorrowerFormComponent {
  @Output() shouldSelectExistingBorrower = new EventEmitter<boolean>();
  @Input() parentFormGroup: FormGroup | undefined;
}
