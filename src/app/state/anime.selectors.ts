import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnimeState } from './anime.reducer';

export const selectAnimeState = createFeatureSelector<AnimeState>('Anime');
export const selectAllAnimes = (state: AnimeState) => state.animes;

export const selectAnimeList = createSelector(
  selectAnimeState,
  (state) => state.animes
);

export const selectAnimeByMalId = (mal_id: number) =>
  createSelector(selectAnimeState, (state) =>
    state.animes.find((anime) => anime.mal_id === mal_id)
  );
