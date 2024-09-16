import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { unLoggedUserGuard } from './un-logged-user.guard';

describe('unLoggedUserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => unLoggedUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
