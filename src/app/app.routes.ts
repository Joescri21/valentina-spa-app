import { Routes } from '@angular/router';
import { LoginPage } from './modulos/auth/login-page/login-page';
import { LandingPage } from './modulos/landing-page/landing-page';
import { BookingOptions } from './modulos/auth/booking-options/booking-options';
import { ClientDashboard } from './modulos/customer/client-dashboard/client-dashboard';


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
    path: 'dashboard-cliente',
    component: ClientDashboard,
    title: 'Panel del Cliente'
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];
