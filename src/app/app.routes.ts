import { Routes } from '@angular/router';
import { LandingPage } from './public/landing-page/landing-page';
import { LoginPage } from './auth/login-page/login-page';
import { DashboardPage } from './client/dashboard-page/dashboard-page';
import { PosPage } from './admin/pos-page/pos-page';

export const routes: Routes = [
  {
    path: 'home',
    component: LandingPage,
    title: 'Valentina Spa'

  },
  {
    path: 'login',
    component: LoginPage,
    title: 'Login - Darshbord'
  },
  {
    path: 'Client Dashboard',
    component: DashboardPage,
    title: 'Client Dashboard'
  },
  {
    path: 'Admin Dashboard',
    component: PosPage,
    title: 'Admin Dashboard'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
  {
    path: '',
    redirectTo: 'home',
  }

];
