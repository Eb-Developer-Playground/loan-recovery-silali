import { createAction, props } from '@ngrx/store';

export const enum LanguageActions {
  SET_LANGUAGE = '[Language] Set Language',
}

export const setLanguage = createAction(
  LanguageActions.SET_LANGUAGE,
  props<{ language: string }>(),
);
