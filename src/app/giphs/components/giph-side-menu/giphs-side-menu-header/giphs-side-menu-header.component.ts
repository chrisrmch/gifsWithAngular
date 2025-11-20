import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'giphs-side-menu-header',
  templateUrl: './giphs-side-menu-header.component.html',
})
export class GiphsSideMenuHeader {
  envs = environment;
}
