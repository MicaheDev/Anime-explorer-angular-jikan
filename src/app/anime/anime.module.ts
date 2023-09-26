import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { animeReducer } from '../state/anime.reducer';
import { StoreModule } from '@ngrx/store';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [AnimeListComponent, AnimeDetailComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('Anime', animeReducer),
    RouterLink
  ]
})
export class AnimeModule { }
