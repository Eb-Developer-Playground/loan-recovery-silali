import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatAnchor, MatButton } from '@angular/material/button';
import { LogoComponent } from '../../components/common/logo/logo.component';
import {
  MatFormField,
  MatHint,
  MatInput,
  MatLabel,
} from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormLoadingBarComponent } from '../../components/common/form-loading-bar/form-loading-bar.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { RouterLink } from '@angular/router';
import { loginUser } from '../../store/auth/auth.actions';
import { LoginData } from '../../models/auth/LoginData';
import { selectAuthLoadingState } from '../../store/auth/auth.selectors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { skip } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { z } from 'zod';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatButton,
    LogoComponent,
    MatInput,
    MatFormField,
    MatIcon,
    MatLabel,
    MatHint,
    FormsModule,
    ReactiveFormsModule,
    FormLoadingBarComponent,
    AsyncPipe,
    NgIf,
    MatAnchor,
    RouterLink,
    TranslateModule,
    MatError,
  ],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  constructor(
    private store: Store,
    private snackBar: MatSnackBar,
  ) {}

  isLoading$ = this.store.select(selectAuthLoadingState);
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  zodValidatorSchema = z.object({
    email: z.string().email('EMAIL_IS_INVALID').min(1, 'EMAIL_IS_REQUIRED'),
    password: z.string().min(1, 'PASSWORD_IS_REQUIRED'),
  });

  formErrors: Record<string, string> = {};

  onSubmit() {
    if (this.loginForm.valid) {
      this.showSnackbar();
      this.store.dispatch(
        loginUser({
          data: this.loginForm.value as LoginData,
        }),
      );
    } else {
      try {
        this.zodValidatorSchema.parse(this.loginForm.value);
      } catch (e) {
        if (e instanceof z.ZodError) {
          this.parseFormErrors(e.errors);
        }
      }
      this.loginForm.markAllAsTouched();
    }
  }

  showSnackbar() {
    let snackBarRef = this.snackBar.open('Logging in...');
    this.isLoading$.pipe(skip(1)).subscribe({
      next: (data) => {
        if (!data) {
          snackBarRef.dismiss();
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
