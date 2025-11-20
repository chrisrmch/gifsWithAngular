import { Component, input } from '@angular/core';



@Component({
  selector: 'giph',
  imports: [],
  templateUrl: './giph.component.html',
})
export class GiphComponent {
  url = input<string>();
}
