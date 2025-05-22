import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = !!sessionStorage.getItem('token');

  if (isAuthenticated) {
    return true;
  } 
  router.navigate(['/auth/signin']); // Redirect to signin if not authenticated
  return false;
};
