import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth/auth.reducers';
import { provideEffects } from '@ngrx/effects';
import {
  provideRouterStore,
  routerReducer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import {
  provideStoreDevtools,
  StoreDevtoolsModule,
} from '@ngrx/store-devtools';
import { AuthEffects } from './store/auth/auth.effects';
import * as fromAuth from './store/auth/auth.selectors';
import {
  localStorageSyncReducer,
  logger,
  ROOT_REDUCERS,
} from './store/persistance';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideStore(ROOT_REDUCERS, {
      runtimeChecks: {
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
      metaReducers: [localStorageSyncReducer, logger],
    }),
    provideEffects([AuthEffects]),
    provideRouterStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      name: 'NgRx Loan Recovery App',
    }),
  ],
};
