import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GiphsService } from '../../../../services/giphs.service';

interface menuOption {
  icon: string;
  label: string;
  router: string;
  sublable: string;
}


@Component({
  selector: 'giphs-side-menu-options',
  templateUrl: './giphs-side-menu-options.component.html',
  imports: [RouterLink, RouterLinkActive],
})
export class GiphsSideMenuOptions {

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

  service = inject(GiphsService)

  getHistoryKeys() {
    return this.service.searchHistoryKeys()
  }

}
