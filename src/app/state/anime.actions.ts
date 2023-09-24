import { createAction, props } from '@ngrx/store';

export const setAnimes = createAction('[Anime] Set Animes', props<{ payload: any }>()); // Cambia aquí
