import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

export const appRoutes: Routes = [
  { path: '', component: MovieListComponent },  
  { path: 'movie/:id', component: MovieDetailComponent } // Dynamic route for movie details
];
