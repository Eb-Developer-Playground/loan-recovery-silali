import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SidebarState } from './sidebar.reducers';

export const selectSidebarState =
  createFeatureSelector<SidebarState>('sidebar');

export const selectSidebarIsOpen = createSelector(
  selectSidebarState,
  (state) => state.isOpen,
);
