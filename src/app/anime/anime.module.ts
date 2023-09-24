import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { animeReducer } from '../state/anime.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AnimeListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('Anime', animeReducer),
  ]
})
export class AnimeModule { }
