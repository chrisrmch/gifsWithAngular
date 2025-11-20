import { Component, input } from '@angular/core';
import { GifComponent } from "../giph/giph.component";
import { Giph } from '../../interfaces/giph.interface';


@Component({
  selector: 'giphs-list',
  imports: [GifComponent],
  templateUrl: './giph-list.component.html',
})
export class GiphsListComponent {
  Giphs = input.required<Giph[]>();
}
