import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import {LoginPoli} from './admin/login-poli/login-poli';

export const routes: Routes = [
  {
    path: 'poli',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./admin/admin')
        .then(m => m.Admin)
  },

  {
    path: 'login-poli',
    loadComponent: () =>
      import('./admin/login-poli/login-poli')
        .then(m => m.LoginPoli)
  },

  {
    path: '',
    loadComponent: () =>
      import('./landing-page/landing-page')
        .then(m => m.LandingPage)
  },

  {
    path: '**',
    redirectTo: ''
  }
];
