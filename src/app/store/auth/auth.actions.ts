import { createAction, createSelector, props } from '@ngrx/store';
import { LoginResponseData } from '../../models/auth/LoginResponseData';
import { LoginData } from '../../models/auth/LoginData';
import { RegisterData } from '../../models/auth/RegisterData';
import { RegisterUserResponse } from '../../models/auth/RegisterUserResponse';
import { UpdateUserProfileData } from '../../models/auth/UpdateUserProfileData';

export const enum AuthActionType {
  LOGIN_USER_SUCCESS = '[Login Page] Login User Success',
  LOGIN_USER_ERROR = '[Login Page] Login User Error',
  LOGIN_USER_DATA = '[Login Page] Login User Data',
  LOGOUT_USER = '[Profile Page] Logout User',
  LOGOUT_USER_SUCCESS = '[Profile Page] Logout User Success',
  LOGOUT_USER_ERROR = '[Profile Page] Logout User Error',
  REGISTER_USER = '[Register Page] Register User',
  REGISTER_USER_SUCCESS = '[Register Page] Register User Success',
  UPDATE_USER_PROFILE = '[Profile Page] Update User Profile',
  UPDATE_USER_PROFILE_SUCCESS = '[Profile Page] Update User Profile Success',
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

export const registerUser = createAction(
  AuthActionType.REGISTER_USER,
  props<RegisterData>(),
);

export const registerUserSuccess = createAction(
  AuthActionType.REGISTER_USER_SUCCESS,
  props<RegisterUserResponse>(),
);

export const updateUserProfile = createAction(
  AuthActionType.UPDATE_USER_PROFILE,
  props<UpdateUserProfileData>(),
);

export const updateUserProfileSuccess = createAction(
  AuthActionType.UPDATE_USER_PROFILE_SUCCESS,
  props<UpdateUserProfileData>(),
);
