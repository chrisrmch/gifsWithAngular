import { Component, input } from '@angular/core';
import { Gif } from "../gif/gif.component";


@Component({
  selector: 'gifs-list',
  imports: [Gif],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {
  imageList = input.required<String[]>();
}
