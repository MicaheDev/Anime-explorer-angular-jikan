import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AnimeService } from 'src/app/services/anime.service';
import { AnimeState } from 'src/app/state/anime.reducer';
import {
  selectAnimeByMalId,
  selectAnimeList,
} from 'src/app/state/anime.selectors';

interface Anime {
  mal_id: number;
  title: string;
  images: any;
  rank: number;
  score: number;
  background: string;
  url: string;
  synopsis: string;
}

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss'],
})
export class AnimeDetailComponent implements OnInit {
  anime$: Observable<Anime | undefined> = new Observable<Anime | undefined>(); // Inicializa la propiedad
  animes$: Observable<any[]> = new Observable<any[]>();

  constructor(
    private animeService: AnimeService,
    private route: ActivatedRoute,
    private store: Store<{ anime: AnimeState }>
  ) {}

  ngOnInit(): void {
    const mal_id = Number(this.route.snapshot.paramMap.get('id'));

    this.animeService.getAnimes().subscribe();
    this.animes$ = this.store.select(selectAnimeList);
    this.anime$ = this.store.select(selectAnimeByMalId(mal_id));
  }
}
