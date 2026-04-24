import { Routes } from '@angular/router';
import { LoginPage } from './modulos/auth/login-page/login-page';
import { LandingPage } from './modulos/landing-page/landing-page';
import { BookingOptions } from './modulos/auth/booking-options/booking-options';


export const routes: Routes = [
  {
    path: 'home',
    component: LandingPage,
    title: 'Valentina Spa',
  },
  {
    path: 'login',
    component: LoginPage,
    title: 'Iniciar Sesión',
  },
  {
    path: 'reservar',
    component: BookingOptions,
    title: 'Opciones de Reserva',
  },
  {
    path: '**',
    redirectTo: 'home'
  },

];
