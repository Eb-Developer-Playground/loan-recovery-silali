import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LanguageState } from './language.reducers';

const selectLanguage = createFeatureSelector<LanguageState>('language');

export const languageSelector = createSelector(
  selectLanguage,
  (state: LanguageState) => state.language,
);
