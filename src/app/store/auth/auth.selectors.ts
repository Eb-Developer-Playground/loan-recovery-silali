import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';

const authKey = 'auth';

export const selectAuthState = createFeatureSelector<AuthState>(authKey);

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user,
);

export const selectAuthLoadingState = createSelector(
  selectAuthState,
  (state) => state.loading,
);

export const selectIsUpdatingProfile = createSelector(
  selectAuthState,
  (state) => state.isUpdatingProfile,
);
