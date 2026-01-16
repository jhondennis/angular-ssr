import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login/login.page').then((m) => m.LoginPage),
      },
      // ESTO ES CLAVE: Si entras a "/", te manda a "/login"
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];
