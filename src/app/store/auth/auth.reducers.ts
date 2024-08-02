import { UserData } from '../../models/auth/UserData';
import { createReducer, on } from '@ngrx/store';
import {
  loginUser,
  loginUserSuccess,
  logoutUser,
  logoutUserSuccess,
} from './auth.actions';

export interface AuthState {
  user?: UserData | null;
  accessToken?: string | null;
  loading?: boolean;
}

export const initialState: AuthState = {
  user: null,
  accessToken: null,
  loading: false,
};

export const authReducer = createReducer(
  initialState,
  on(loginUser, (state, { data }) => {
    return { ...state, loading: true, otherThings: 'Biatch' };
  }),
  on(loginUserSuccess, (state, { user }) => {
    return {
      ...state,
      user: user.userData,
      accessToken: user.accessToken,
      loading: false,
      otherThings: 'bfdsfhdfk',
    };
  }),
  on(logoutUser, (state) => {
    return { ...state, loading: true };
  }),
  on(logoutUserSuccess, () => {
    return initialState;
  }),
);
