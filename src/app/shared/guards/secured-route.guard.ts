import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const securedRouteGuard: CanActivateFn = (route, data) => {
  const redirectNotAuthorized = () => {
    const router = inject(Router);
    router.navigate(['/not-found']);
    return false;
  };
  if (!localStorage.getItem('token')) {
    return redirectNotAuthorized();
  }
  if (!localStorage.getItem('user_roles')) {
    return redirectNotAuthorized();
  }

  const userRoles = JSON.parse(localStorage.getItem('user_roles')!);
  if (!userRoles.includes('admin')) {
    return redirectNotAuthorized();
  }
  return true;
};
