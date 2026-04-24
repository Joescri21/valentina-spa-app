import { Routes } from '@angular/router';
import { LoginPage } from './modulos/auth/login-page/login-page';
import { LandingPage } from './modulos/landing-page/landing-page';
import { Catalogo } from './shared/components/catalogo/catalogo';


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
