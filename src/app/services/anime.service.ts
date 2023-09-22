import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private apiUrl = "https://api.jikan.moe/v4/top/anime"

  private localStorageKey = 'animeData';

  constructor(private http: HttpClient) {}

  getAnimes(): Observable<any> {
    // Intenta obtener los datos del localStorage
    const cachedData = localStorage.getItem(this.localStorageKey);
    if (cachedData) {
      return of(JSON.parse(cachedData)); // Devuelve los datos almacenados en caché
    } else {
      // Si no hay datos en caché, realiza una llamada a la API
      return this.http.get(this.apiUrl).pipe(
        tap((data) => {
          // Almacena los datos en el localStorage para futuras solicitudes
          localStorage.setItem(this.localStorageKey, JSON.stringify(data));
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
