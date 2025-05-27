import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  private movieService = inject(MovieService); // Use inject correctly
  movies = this.movieService.movies; // Use stored movies (persists on navigation)
  searchQuery = this.movieService.searchQuery; // Use stored query

  constructor() {}

  searchMovies(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value.trim();

    if (!query) return;

    this.movieService.getMovies(query); //Store results persistently in the service
  }
}

/*
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  private movieService = inject(MovieService); // ✅ Correct way to use `inject()`
  movies = signal<any[]>([]);
  searchQuery = signal('');

  constructor() {}

  searchMovies(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery.set(inputElement.value.trim());

    if (!this.searchQuery()) return;

    this.movieService.getMovies(this.searchQuery()).subscribe(response => {
      this.movies.set(response.Search || []);
    });
  }
}
*/


