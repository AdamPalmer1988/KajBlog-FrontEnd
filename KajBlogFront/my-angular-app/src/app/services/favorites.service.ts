import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorite } from '../models/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private apiUrl = 'http://localhost:4200/api/favorites'; 
  constructor(private http: HttpClient) { }
  getFavoritesByUserId(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }

  getAllFavorites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(this.apiUrl);
  }

  createFavorite(favoriteDto: Favorite): Observable<Favorite> {
    return this.http.post<Favorite>(this.apiUrl, favoriteDto);
  }

  updateFavorite(id: number, favoriteDto: Favorite): Observable<Favorite> {
    return this.http.put<Favorite>(`${this.apiUrl}/${id}`, favoriteDto);
  }

  deleteFavorite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

