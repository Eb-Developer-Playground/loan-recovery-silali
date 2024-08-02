import { createAction, props } from '@ngrx/store';
import { LoginResponseData } from '../../models/auth/LoginResponseData';
import { LoginData } from '../../models/auth/LoginData';

export const enum AuthActionType {
  LOGIN_USER_SUCCESS = '[Login Page] Login User Success',
  LOGIN_USER_ERROR = '[Login Page] Login User Error',
  LOGIN_USER_DATA = '[Login Page] Login User Data',
  LOGOUT_USER = '[Profile Page] Logout User',
  LOGOUT_USER_SUCCESS = '[Profile Page] Logout User Success',
  LOGOUT_USER_ERROR = '[Profile Page] Logout User Error',
}

export const loginUser = createAction(
  AuthActionType.LOGIN_USER_DATA,
  props<{ data: LoginData }>(),
);
export const loginUserSuccess = createAction(
  AuthActionType.LOGIN_USER_SUCCESS,
  props<{ user: LoginResponseData }>(),
);
export const loginUserError = createAction(
  AuthActionType.LOGIN_USER_ERROR,
  props<{ error: any }>(),
);

export const logoutUser = createAction(AuthActionType.LOGOUT_USER);
export const logoutUserSuccess = createAction(
  AuthActionType.LOGOUT_USER_SUCCESS,
);
