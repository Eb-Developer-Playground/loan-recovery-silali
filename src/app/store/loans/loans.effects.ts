import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatLatestFrom } from '@ngrx/operators';
import {
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

@Injectable()
export class LoansEffects {
  constructor(
    private actions$: Actions,
    private loanService: LoanService,
    private store: Store,
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
}
