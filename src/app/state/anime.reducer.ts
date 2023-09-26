import { createReducer, on } from '@ngrx/store';
import { setAnimes } from './anime.actions';

export interface AnimeState {
  animes: any[];
}

const initialState: AnimeState = {
  animes: [],
};

export const animeReducer = createReducer(
  initialState,
  on(setAnimes, (state, { payload }) => ({ ...state, animes: payload }))
);
