import { createAction, props } from '@ngrx/store';
import { LoginResponseData } from '../../models/auth/LoginResponseData';
import { LoginData } from '../../models/auth/LoginData';
import { UserData } from '../../models/auth/UserData';

export const enum AuthActionType {
  LOGIN_USER_SUCCESS = '[Login Page] Login User Success',
  LOGIN_USER_ERROR = '[Login Page] Login User Error',
  LOGIN_USER_DATA = '[Login Page] Login User Data',
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
