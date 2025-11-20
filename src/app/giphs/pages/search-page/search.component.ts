import { Component, inject, signal } from '@angular/core';
import { GiphsListComponent } from "../../components/giph-list.component/giph-list.component";
import { GiphsService } from '../../../services/giphs.service';
import { Giph } from '../../interfaces/giph.interface';

@Component({
  templateUrl: './search.component.html',
  imports: [GiphsListComponent],
})
export default class Search {
  protected gifService = inject(GiphsService);
  gifs = signal<Giph[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe(
      (resp) => {
        this.gifs.set(resp)
      }
    )
  }
}
