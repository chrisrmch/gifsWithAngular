import { Component, input } from '@angular/core';
import { GiphComponent } from "../giph/giph.component";
import { Giph } from '../../interfaces/giph.interface';


@Component({
  selector: 'giphs-list',
  imports: [GiphComponent],
  templateUrl: './giph-list.component.html',
})
export class GiphsListComponent {
  Giphs = input.required<Giph[]>();
}
