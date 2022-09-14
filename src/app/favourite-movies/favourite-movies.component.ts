import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavouriteMoviesService } from '../favourite-movies.service';
import { Movie } from '../Movie';

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.css']
})
export class FavouriteMoviesComponent implements OnInit {
  favouriteMovies$!: Observable<Movie[]>;


  constructor(private favouriteMovieService: FavouriteMoviesService) { }

  ngOnInit(): void {
    this.favouriteMovies$ = this.favouriteMovieService.getFavouriteMovies();
  }

}
