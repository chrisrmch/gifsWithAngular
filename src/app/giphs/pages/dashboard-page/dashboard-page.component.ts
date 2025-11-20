import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiphsSideMenuHeader } from '../../components/giph-side-menu/giphs-side-menu-header/giphs-side-menu-header.component';
import GiphsSideMenu from '../../components/giph-side-menu/giphs-side-menu.component';

@Component({
  selector: 'selector-name',
  imports: [RouterOutlet, GiphsSideMenu],
  templateUrl: './dashboard-page.component.html',
})

export default class dashboardPageComponent  {}
