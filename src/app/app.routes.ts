import { Routes } from '@angular/router';
import { LoginPage } from './modulos/auth/login-page/login-page';
import { LandingPage } from './modulos/landing-page/landing-page';
import { Catalogo } from './shared/components/catalogo/catalogo';
import { BookingOptions } from './modulos/auth/booking-options/booking-options';


export const routes: Routes = [
  {
    path: 'home',
    component: LandingPage,
    title: 'Valentina Spa',
    children: [
      {
        path: 'catalogo',
        component: Catalogo,
        title: 'Catálogo de Productos',
      }
    ]
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
