import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setAnimes } from '../state/anime.actions';
import { AnimeState } from '../state/anime.reducer';

interface ApiResponse {
  data: any[]; // Puedes ajustar el tipo de "data" según la estructura real de la respuesta
  pagination: any;
  links: any;
  meta: any;
}

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private apiUrl = 'https://api.jikan.moe/v4/top/anime';
  private localStorageKey = 'animeData';

  constructor(
    private http: HttpClient,
    private store: Store<{ anime: AnimeState }>
  ) {}

  getAnimes(): Observable<any> {
    // Intenta obtener los datos del Local Storage
    const cachedData = localStorage.getItem(this.localStorageKey);
    if (cachedData) {
      // Si los datos están en el Local Storage, actualiza el estado de NgRx y retorna los datos
      const parsedData = JSON.parse(cachedData);
      this.store.dispatch(setAnimes({ payload: parsedData }));
      return of(parsedData); // Utiliza 'of' para crear un observable con los datos en caché
    } else {
      // Si no hay datos en caché, realiza una llamada a la API y almacena los datos en caché
      return this.http.get(this.apiUrl).pipe(
        tap((response) => {
          const data = (response as ApiResponse).data
          // Almacena los datos en el Local Storage para futuras solicitudes
          localStorage.setItem(this.localStorageKey, JSON.stringify(data));
          // Actualiza el estado de NgRx
          this.store.dispatch(setAnimes({ payload: data }));
        }),
        catchError(this.handleError('getAnimes', []))
      );
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Manejo del error (puedes personalizarlo según tus necesidades)
      console.error(error);
      return of(result as T);
    };
  }
}
