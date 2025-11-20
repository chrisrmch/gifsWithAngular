import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./giphs/pages/dashboard-page/dashboard-page.component'),
    children: [


      {
        path: 'trending',
        loadComponent: ()=> import('./giphs/pages/trending-page/trending.component'),
      },

      {
        path: 'search',
        loadComponent: () => import('./giphs/pages/search-page/search.component'),
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  }
 ];
