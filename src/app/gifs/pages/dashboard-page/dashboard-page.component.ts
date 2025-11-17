import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenu } from "../../components/gifs-side-menu/gifs-side-menu.component";

@Component({
  selector: 'selector-name',
  imports: [RouterOutlet, GifsSideMenu],
  templateUrl: './dashboard-page.component.html',
})

export default class dashboardPageComponent  {}
