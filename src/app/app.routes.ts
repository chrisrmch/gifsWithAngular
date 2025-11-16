import { Routes } from '@angular/router';
import { Trending } from './gifs/pages/trending-page/trending.component';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'trending',
        component: Trending,
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search-page/search.component'),
      },

      {
        path: '**',
        redirectTo: 'trending',
      }
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  }
 ];
