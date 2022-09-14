import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class FavouriteMoviesService {

  constructor() { }

  getFavouriteMovies(): Observable<Movie[]> {
    return new Observable;
  }
}
