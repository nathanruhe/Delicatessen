import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isAuthenticated = false;

  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/admin']);
    return false;
  }
};