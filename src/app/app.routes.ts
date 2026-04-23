import { Routes } from '@angular/router';
import { LandingPage } from './public/landing-page/landing-page';
import { LoginPage } from './auth/login-page/login-page';
import { DashboardPage } from './client/dashboard-page/dashboard-page';
import { PosPage } from './admin/pos-page/pos-page';
import { Home } from './public/components/home/home';
import { Catalogo } from './public/components/catalogo/catalogo';

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
    path: '**',
    redirectTo: 'home'
  },

];
