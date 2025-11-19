import { Component, input } from '@angular/core';
import { Gif } from "../gif/gif.component";
import { Giph } from '../../interfaces/giph.interface';


@Component({
  selector: 'gifs-list',
  imports: [Gif],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {
  Giphs = input.required<Giph[]>();
}
