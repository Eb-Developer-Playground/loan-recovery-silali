import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { selectUser } from '../../store/auth/auth.selectors';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(Store);
  const selectedUser = store.select(selectUser);
  return selectedUser.pipe(
    take(1),
    map((user) => {
      console.log({ user });
      if (user) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    }),
  );
};
