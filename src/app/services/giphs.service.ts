import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../giphs/interfaces/giphy.interfaces';
import { Giph } from '../giphs/interfaces/giph.interface';
import { GiphMapper } from '../giphs/mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Giph[]>([]);
  trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Giph[]>>({

  });

  searchHistoryKeys = computed(() => {
    return Object.keys(this.searchHistory)
  })

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
        const gifs = GiphMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false)
        console.log({ gifs });
      }
    );
  }

  searchGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.api_url}/gifs/search`, {
        params: {
          api_key: environment.apiKey,
          q: query,
          limit: 15,
          rating: 'pg',
          lang: 'fr',
        }
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GiphMapper.mapGiphyItemsToGifArray(items)),
        tap(items => {
          this.searchHistory.update(history => (
            {
              ...history,
              [query.toLowerCase()]: items,
            }
          ))
        }))
  }

}
