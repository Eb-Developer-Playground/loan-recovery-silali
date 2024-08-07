import { createAction, props } from '@ngrx/store';

export interface RouterParams {
  path: any[];
  queryParams?: object;
}

export const goToRoute = createAction('GO_TO_ROUTE', props<RouterParams>());
