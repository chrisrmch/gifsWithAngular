import { Component } from '@angular/core';
import { GifsSideMenuHeader } from "./gifs-side-menu-header/gifs-side-menu-header.component";
import { GifsSideMenuOptions } from "./gifs-side-menu-options/gifs-side-menu-options.component";

@Component({
  selector: 'gifs-side-menu',
  imports: [GifsSideMenuHeader, GifsSideMenuOptions],
  templateUrl: './gifs-side-menu.component.html',
})
export class GifsSideMenu { }
