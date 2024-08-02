import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth/auth.service';
import {
  loginUser,
  loginUserError,
  loginUserSuccess,
  logoutUser,
  logoutUserSuccess,
  registerUser,
  registerUserSuccess,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      exhaustMap((userData) =>
        this.authService.attemptLogin(userData.data).pipe(
          map((user) => {
            return loginUserSuccess({ user });
          }),
          catchError((error) => of(loginUserError({ error }))),
        ),
      ),
    ),
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginUserSuccess),
        tap((data) => this.router.navigate(['/'])),
      ),
    { dispatch: false },
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutUser),
      exhaustMap(() =>
        this.authService.attemptLogout().pipe(
          map(() => logoutUserSuccess()),
          catchError((error) => of()), //TODO add error handling
        ),
      ),
    ),
  );

  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutUserSuccess),
        tap((data) => this.router.navigate(['/login'])),
      ),
    { dispatch: false },
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      exhaustMap((userData) =>
        this.authService.registerUser(userData).pipe(
          map((user) => registerUserSuccess(userData)),
          catchError((error) => of()), //TODO add error handling
        ),
      ),
    ),
  );

  registerUserSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUserSuccess),
      exhaustMap((userData) => of(loginUser({ data: userData }))),
    ),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}
}
