import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router'; // ✅ Import RouterModule
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Add RouterModule
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {
  private route = inject(ActivatedRoute);
  private movieService = inject(MovieService);
  movie = signal<any | null>(null);

  constructor() {
    const movieId = this.route.snapshot.paramMap.get('id'); // Get movie ID from URL
    if (movieId) {
      this.movieService.getMovieDetails(movieId).subscribe(details => {
        this.movie.set(details); // Store movie details
      });
    }
  }
}




