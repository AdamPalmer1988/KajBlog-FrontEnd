import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private apiKey = 'kb7gjyaiHnFEE11dBRUQNxFRxqZSuWuZ';
  private baseUrl = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  search(query: string, limit: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('q', query)
      .set('limit', limit.toString());

      return this.http.get(`${this.baseUrl}/search`, {params});
  }

  trending(limit: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', limit.toString());

    return this.http.get(`${this.baseUrl}/trending`, { params });
  }
}
