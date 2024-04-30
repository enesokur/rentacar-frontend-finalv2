import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { securedRouteGuard } from './secured-route.guard';

describe('securedRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => securedRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
