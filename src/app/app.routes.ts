import { Routes } from '@angular/router';
import { ROUTES } from '@/constants';

import { MainLayout } from './layouts/main-layout/main-layout';
import { PublicLayout } from './layouts/public-layout/public-layout';

export const routes: Routes = [
  // Apartir de aqui son las rutas publicas
  {
    path: ROUTES.LOGIN,
    component: PublicLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/auth/login/login.page').then((m) => m.LoginPage),
      },
    ],
  },

  //Apartir de aqui son las rutas privadas
  {
    path: ROUTES.HOME,
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
      },
    ],
  },
];
