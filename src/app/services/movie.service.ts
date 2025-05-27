import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = '64b6dcd4';
  private apiUrl = `https://www.omdbapi.com/?apikey=${this.apiKey}`;

  movies = signal<any[]>([]); // Persist movies list
  searchQuery = signal<string>(''); // Persist search query

  constructor(private http: HttpClient) {}

  getMovies(query: string): void {
    this.searchQuery.set(query); // ✅ Save query

    this.http.get<any>(`${this.apiUrl}&s=${query}`).subscribe(response => {
      this.movies.set(response.Search || []); // Save results persistently
    });
  }

  getMovieDetails(id: string) {
    return this.http.get<any>(`${this.apiUrl}&i=${id}`);
  }
}

/*
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '64b6dcd4';
  private apiUrl = `https://www.omdbapi.com/?apikey=${this.apiKey}`;

  movies = signal<any[]>([]); // ✅ Store search results
  searchQuery = signal<string>(''); // ✅ Store search query

  constructor(private http: HttpClient) {}

  getMovies(query: string): Observable<any> {
    this.searchQuery.set(query); // ✅ Save search query
    return this.http.get<any>(`${this.apiUrl}&s=${query}`);
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}&i=${id}`);
  }

  saveMovies(movies: any[]) {
    this.movies.set(movies); // ✅ Save search results
  }
}
*/


