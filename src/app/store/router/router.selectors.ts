import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

export const getRouterReducerState =
  createFeatureSelector<RouterReducerState>('router');

export const selectRoute = createSelector(
  getRouterReducerState,
  (data: RouterReducerState) => ({
    queryParams: data.state.root.queryParams,
    url: data.state.root.url,
  }),
);
