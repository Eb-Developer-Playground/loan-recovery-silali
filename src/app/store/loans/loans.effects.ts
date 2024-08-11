import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import {
  createLoan,
  createLoanSuccess,
  filterLoans,
  filterLoansSuccess,
  getLoans,
  getLoansSuccess,
} from './loans.actions';
import { exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { LoanService } from '../../services/loans/loan.service';
import { loansSelector } from './loans.selector';
import { Store } from '@ngrx/store';
import { Loan } from '../../models/loans/Loan';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class LoansEffects {
  constructor(
    private actions$: Actions,
    private loanService: LoanService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  getLoans$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLoans),
      exhaustMap(() => {
        return this.loanService.fetchLoans().pipe(
          map((loans) =>
            getLoansSuccess({
              data: loans,
            }),
          ),
        );
      }),
    ),
  );

  createLoan$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createLoan),
      exhaustMap(({ data }) => {
        return this.loanService
          .createLoan(data)
          .pipe(map((response) => createLoanSuccess()));
      }),
    ),
  );

  createLoanSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createLoanSuccess),
        tap(() => {
          this.router.navigate(['/loans']).then(() => {
            this.snackBar.open('Loan Added Successfully', 'Ok', {
              duration: 3000,
            });
          });
        }),
      ),
    { dispatch: false },
  );
}
