import { TestBed } from '@angular/core/testing';
import { CanActivateFn, provideRouter, Router } from '@angular/router';

import { authGuard } from './auth.guard';
import { routes } from '../../app.routes';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('AuthGuard', () => {
  let guard: any;
  let store: Store;
  let router: Router;

  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    const storeMock = {
      select: jasmine.createSpy().and.returnValue(of(null)),
    };

    const routerMock = {
      navigate: jasmine.createSpy('navigate'),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: Store, useValue: storeMock },
        { provide: Router, useValue: routerMock },
      ],
    });

    guard = authGuard;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
  });

  it('should be true if user is logged in', (done) => {
    expect(true).toBeTruthy();
    // done();

    TestBed.runInInjectionContext(() => {
      (store.select as jasmine.Spy).and.returnValue(
        of({ email: 'email@mail.com', name: 'Test User' }),
      );
      const result = guard({} as any, {} as any);

      result.subscribe((res: any) => {
        expect(res).toBeTrue();
        done();
      });
    });
  });

  it('should navigate to login if user is not logged in', (done) => {
    TestBed.runInInjectionContext(() => {
      (store.select as jasmine.Spy).and.returnValue(of(null));

      const result = guard({} as any, {} as any);

      result.subscribe((res: any) => {
        expect(res).toBeFalse();
        expect(router.navigate).toHaveBeenCalledWith(['/login']);
        done();
      });
    });
  });
});
