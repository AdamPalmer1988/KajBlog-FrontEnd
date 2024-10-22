import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoriteUrl:string = environment.apiUrl + "/favorites";
  constructor(private http: HttpClient) { }

  // Get all favorites
  getFavorites(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.favoriteUrl);
  }

  // Add a favorite
  addFavorite(blogId: number): Observable<void> {
    return this.http.post<void>(`${this.favoriteUrl}/${blogId}`, null, {
    });
  }

  // Remove a favorite
  removeFavorite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.favoriteUrl}/${id}`, {
    });
  }
}
