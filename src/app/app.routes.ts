import { Routes } from '@angular/router';
import { LoginPage } from './modulos/auth/login-page/login-page';
import { LandingPage } from './modulos/landing-page/landing-page';
import { BookingOptions } from './modulos/auth/booking-options/booking-options';
import { ClientDashboard } from './modulos/customer/client-dashboard/client-dashboard';
import { HomeCite } from './modulos/customer/client-dashboard/home-cite/home-cite';
import { AdminDasboard } from './modulos/admin/admin-dasboard/admin-dasboard';
import { adminGuard } from './core/guards/admin-guard';
import { clientGuard } from './core/guards/client-guard';


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
    path: 'client-dashboard',
    component: ClientDashboard,
    canActivate: [clientGuard],
    title: 'Dashboard Cliente',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeCite,
        title: 'Home - Reservar tu citas'
      }
    ]
  },
  {
    path: 'admin-dasboard',
    component: AdminDasboard,
    canActivate: [adminGuard],
    title: 'Dashboard Admin',
    children: [

    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];
