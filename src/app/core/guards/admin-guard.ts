import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/authServices';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  // 1. Verificamos si hay sesión iniciada
  // 2. Verificamos si el rol es 'admin'
  if (authService.isLoggedIn() && authService.getUserRole() === 'admin') {
    return true; // Acceso concedido
  }

  // Si no cumple, lo mandamos al login
  router.navigate(['/login']);
  return false; // Acceso denegado
};