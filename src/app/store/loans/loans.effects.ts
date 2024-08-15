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
  searchLoans,
  searchLoansError,
  searchLoansNoResult,
  searchLoansSuccess,
} from './loans.actions';
import { exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { LoanService } from '../../services/loans/loan.service';
import { loansSelector } from './loans.selector';
import { Store } from '@ngrx/store';
import { Loan } from '../../models/loans/Loan';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoanSearchService } from '../../services/search/loan-search.service';
import { selectRoute } from '../router/router.selectors';

@Injectable()
export class LoansEffects {
  allLoans = this.store.select(selectRoute);
  constructor(
    private actions$: Actions,
    private loanService: LoanService,
    private router: Router,
    private snackBar: MatSnackBar,
    private searchService: LoanSearchService,
    private store: Store,
  ) {}

  getLoans$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLoans),
      exhaustMap(() => {
        return this.loanService.fetchLoans().pipe(
          map((loans) => {
            console.log({ loans });
            this.searchService.setData(loans);
            return getLoansSuccess({
              data: loans,
            });
          }),
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

  searchLoans$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchLoans),
      switchMap((action) =>
        this.searchService.search(action.query).then(
          (results) => {
            const searchResults = results.map((result) => result.item);
            if (action.query.trim().length == 0) {
              return searchLoansNoResult();
            }
            return searchLoansSuccess({
              searchResults,
            });
          },
          (error) => searchLoansError(),
        ),
      ),
    ),
  );

  searchLoansSuccess$ = createEffect(
    () => this.actions$.pipe(ofType(searchLoansSuccess)),
    { dispatch: false },
  );

  searchLoansNoResult$ = createEffect(
    () => this.actions$.pipe(ofType(searchLoansNoResult)),
    { dispatch: false },
  );
}
