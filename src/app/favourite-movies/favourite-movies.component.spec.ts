import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Movie } from '../Movie';

import { FavouriteMoviesComponent } from './favourite-movies.component';

const favoriteMoviesToUse: Movie[] = [
  { title: 'Interstellar' } as Movie,
  { title: 'The big Lebowski' } as Movie,
  { title: 'Fences' } as Movie
];

describe('FavouriteMoviesComponent', () => {
  let component: FavouriteMoviesComponent;
  let fixture: ComponentFixture<FavouriteMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteMoviesComponent);
    component = fixture.componentInstance;
    component.favoriteMovies = favoriteMoviesToUse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should have a title', () =>{
    const titleElement = fixture.debugElement.queryAll(By.css('p'));
    expect(titleElement.length).toBe(1);
    expect(titleElement[0].nativeElement.innerHTML).toBe('favourite-movies works!')
  });

  it('show all the favorite movies', () => {
    const movieElements = fixture.debugElement.queryAll(By.css('.movie'));
    expect(movieElements.length).toBe(favoriteMoviesToUse.length);
  });
  
  it('should show the movie titles', () => {
    const movieElements = fixture.debugElement.queryAll(By.css('.movie'));
    movieElements.forEach((movieElement: DebugElement, index) => {
       expect(movieElement.nativeElement.innerHTML).toContain(favoriteMoviesToUse[index].title);
    });
  });
});
