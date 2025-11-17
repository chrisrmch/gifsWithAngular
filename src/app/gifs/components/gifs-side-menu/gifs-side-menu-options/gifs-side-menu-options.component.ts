import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

interface menuOption {
  icon: string;
  label: string;
  router: string;
  sublable: string;
}


@Component({
  selector: 'gifs-side-menu-options',
  templateUrl: './gifs-side-menu-options.component.html',
  imports: [RouterLink, RouterLinkActive],
})
export class GifsSideMenuOptions {

  menuOptions: menuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublable: 'Gifs populares',
      router: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      sublable: 'Buscar gifs',
      router: '/dashboard/search',
    }
  ];

}
