import { createReducer, on } from '@ngrx/store';
import { setLanguage } from './language.actions';

export interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: 'en',
};

export const languageReducer = createReducer(
  initialState,
  on(setLanguage, (state, action) => {
    return { ...state, language: action.language };
  }),
);
