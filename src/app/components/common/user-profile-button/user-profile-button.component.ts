import { Component, computed } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '../../../store/auth/auth.selectors';
import { AsyncPipe } from '@angular/common';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { logoutUser } from '../../../store/auth/auth.actions';
import { skip } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile-button',
  standalone: true,
  imports: [AsyncPipe, MatMenu, MatMenuItem, MatMenuTrigger, RouterLink],
  templateUrl: './user-profile-button.component.html',
  styleUrl: './user-profile-button.component.scss',
})
export class UserProfileButtonComponent {
  constructor(
    private store: Store,
    private snackBar: MatSnackBar,
  ) {}

  selectedUser$ = this.store.select(selectUser);
  user$ = toSignal(this.selectedUser$);
  userEmail = computed(() => this.user$()?.email);
  userName = computed(() => this.user$()?.name);

  logout() {
    this.showSnackbar();
    this.store.dispatch(logoutUser());
  }

  showSnackbar() {
    let snackBarRef = this.snackBar.open('Logging you out...');
    this.selectedUser$.pipe(skip(1)).subscribe({
      next: (data) => {
        if (!data) {
          snackBarRef.dismiss();
        }
      },
    });
  }
}
