import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },

  {
    path: 'landing-page',
    loadComponent: () =>
      import('./landing-page/landing-page')
        .then(m => m.LandingPage)
  },

];
