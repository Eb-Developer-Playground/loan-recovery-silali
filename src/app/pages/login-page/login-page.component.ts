import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
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
import { FormLoadingBarComponent } from '../../common/form-loading-bar/form-loading-bar.component';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { loginUser } from '../../store/auth/auth.actions';
import { LoginData } from '../../models/auth/LoginData';
import { selectAuthLoadingState } from '../../store/auth/auth.selectors';

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
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router,
  ) {}

  isLoading$ = this.store.select(selectAuthLoadingState);
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      this.store.dispatch(
        loginUser({
          data: this.loginForm.value as LoginData,
        }),
      );
    }
  }
}
