import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GiphsService } from 'src/app/services/giphs.service';
import { GiphsListComponent } from "../../components/giph-list.component/giph-list.component";

@Component({
  selector: 'giph-history.component',
  imports: [GiphsListComponent],
  templateUrl: './giph-history.component.html',
})
export default class GiphHistoryComponent {
  private giphService = inject(GiphsService)

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['query']
      )
    )
  );

  giphsByKey = computed(
    () => {
      return this.giphService.getHistoryGifs(this.query())
    }
  )
}
