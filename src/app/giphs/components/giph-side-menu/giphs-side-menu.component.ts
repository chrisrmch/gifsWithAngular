import { Component } from '@angular/core';
import { GifsSideMenuHeader } from "./giphs-side-menu-header/giphs-side-menu-header.component";
import { GifsSideMenuOptions } from "./giphs-side-menu-options/giphs-side-menu-options.component";

@Component({
  selector: 'gifs-side-menu',
  imports: [GifsSideMenuHeader, GifsSideMenuOptions],
  templateUrl: './gifs-side-menu.component.html',
})
export class GifsSideMenu { }
