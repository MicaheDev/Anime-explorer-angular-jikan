import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AnimeService } from 'src/app/services/anime.service';
import { AnimeState, selectAnimeList } from 'src/app/state/anime.reducer';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss'],
})
export class AnimeListComponent implements OnInit {
  animes$: Observable<any[]> = new Observable<any[]>();

  constructor(
    private animeService: AnimeService,
    private store: Store<{ anime: AnimeState }>
  ) {}

  ngOnInit() {
    this.animeService.getAnimes()
    this.animes$ = this.store.select(selectAnimeList);
  }
}
