import { Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { FormLoadingBarComponent } from '../../components/common/form-loading-bar/form-loading-bar.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LogoComponent } from '../../components/common/logo/logo.component';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInput, MatLabel } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { registerUser } from '../../store/auth/auth.actions';
import { RegisterData } from '../../models/auth/RegisterData';
import { selectAuthLoadingState } from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    AsyncPipe,
    FormLoadingBarComponent,
    FormsModule,
    LogoComponent,
    MatAnchor,
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatButton,
    RouterLink,
    MatInput,
    NgIf,
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
})
export class RegisterPageComponent {
  constructor(private store: Store) {}

  isLoading$ = this.store.select(selectAuthLoadingState);

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.registerForm.valid) {
      this.store.dispatch(
        registerUser(this.registerForm.value as RegisterData),
      );
    }
  }
}
