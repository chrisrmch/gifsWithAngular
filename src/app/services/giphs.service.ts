import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../gifs/interfaces/giphy.interfaces';
import { Giph } from '../gifs/interfaces/giph.interface';
import { GifMapper } from '../gifs/mapper/gif.mapper';

@Injectable({
  providedIn: 'root'
})
export class GiphsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Giph[]>([]);
  trendingGifsLoading = signal(true)

  constructor() {
    this.trendingGifsLoading = signal(true)
    this.loadTrendingGifs();
  }


  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.api_url}/gifs/trending`, {
      params: {
        api_key: environment.apiKey,
        limit: 20,
      }
    }
    ).subscribe(
      (resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false)
        console.log({ gifs });
      }
    );
  }

}
