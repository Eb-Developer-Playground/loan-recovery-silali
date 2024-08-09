import { createAction, props } from '@ngrx/store';

export const enum SidebarActionTypes {
  TOGGLE_SIDEBAR = '[Sidebar] Open Close Sidebar',
}

export const toggleSidebar = createAction(SidebarActionTypes.TOGGLE_SIDEBAR);
