import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/authServices';

export const clientGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  // 1. Verificamos si hay sesión iniciada
  // 2. Verificamos si el rol es 'client'
  if (authService.isLoggedIn() && authService.getUserRole() === 'client') {
    return true; // Acceso concedido
  }

  // Si no cumple, lo mandamos al login o a la página de reserva
  if (authService.isLoggedIn() && authService.getUserRole() === 'admin') {
    router.navigate(['/admin-dasboard']);
    return false;
  }

  router.navigate(['/reservar']);
  return false; // Acceso denegado
};
