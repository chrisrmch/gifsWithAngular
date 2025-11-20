import { Component } from '@angular/core';
import { GiphsSideMenuHeader }  from "./giphs-side-menu-header/giphs-side-menu-header.component";
import {GiphsSideMenuOptions} from "./giphs-side-menu-options/giphs-side-menu-options.component";

@Component({
  selector: 'giphs-side-menu',
  imports: [GiphsSideMenuHeader, GiphsSideMenuOptions ],
  templateUrl: './giphs-side-menu.component.html',
})
export default class GiphsSideMenu { }
