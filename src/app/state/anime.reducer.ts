import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { setAnimes } from './anime.actions';

export interface AnimeState {
  animes: any[];
}

const initialState: AnimeState = {
  animes: [],
};

export const selectAnimeState = createFeatureSelector<AnimeState>('Anime');

// Selector para obtener la lista de animes
export const selectAnimeList = createSelector(
  selectAnimeState,
  (state) => state.animes
);

export const animeReducer = createReducer(
  initialState,
  on(setAnimes, (state, { payload }) => ({ ...state, animes: payload }))
);
