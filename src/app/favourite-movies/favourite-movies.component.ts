import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.css']
})
export class FavouriteMoviesComponent implements OnInit {
  favoriteMovies!: Movie[];

  constructor() { }

  ngOnInit(): void {
  }

}
