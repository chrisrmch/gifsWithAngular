import { Component, input } from '@angular/core';



@Component({
  selector: 'gif',
  imports: [],
  templateUrl: './gif.component.html',
})
export class GifComponent {
  url = input<string>();
}
