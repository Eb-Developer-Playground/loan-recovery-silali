import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { goToRoute } from './router.actions';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
  ) {}

  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(goToRoute),
        tap((data) => {
          const { path, queryParams } = data;
          this.router.navigate(path, { queryParams });
        }),
      ),
    { dispatch: false },
  );
}
