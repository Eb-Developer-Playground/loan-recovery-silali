import { UserData } from '../../models/auth/UserData';
import { createReducer, on } from '@ngrx/store';
import {
  loginUser,
  loginUserSuccess,
  logoutUser,
  logoutUserSuccess,
  registerUser,
  registerUserSuccess,
  updateUserProfile,
  updateUserProfileSuccess,
} from './auth.actions';

export interface AuthState {
  user?: UserData | null;
  accessToken?: string | null;
  loading?: boolean;
  isUpdatingProfile?: boolean;
}

export const initialState: AuthState = {
  user: null,
  accessToken: null,
  loading: false,
  isUpdatingProfile: false,
};

export const authReducer = createReducer(
  initialState,
  on(loginUser, (state, { data }) => {
    return { ...state, loading: true };
  }),
  on(loginUserSuccess, (state, { user }) => {
    return {
      ...state,
      user: user.userData,
      accessToken: user.accessToken,
      loading: false,
    };
  }),
  on(logoutUser, (state) => {
    return { ...state, loading: true };
  }),
  on(logoutUserSuccess, () => {
    return initialState;
  }),
  on(registerUser, (state) => {
    return { ...state, loading: true };
  }),
  on(registerUserSuccess, (state) => {
    return state;
  }),
  on(updateUserProfile, (state) => {
    return { ...state, isUpdatingProfile: true };
  }),

  on(updateUserProfileSuccess, (state, data) => {
    return {
      ...state,
      isUpdatingProfile: false,
      user: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    };
  }),
);
