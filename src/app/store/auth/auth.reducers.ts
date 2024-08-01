import { UserData } from '../../models/auth/UserData';
import { createReducer, on } from '@ngrx/store';
import { loginUser, loginUserSuccess } from './auth.actions';

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
    return { ...state, loading: true };
  }),
  on(loginUserSuccess, (state, { user }) => {
    return {
      ...state,
      user: user.body.user_data,
      accessToken: user.body.access_token,
      loading: false,
    };
  }),
);
