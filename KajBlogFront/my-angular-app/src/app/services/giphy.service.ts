import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiUrl = 'https://api.giphy.com/v1/gifs';
  private apiGiphyKey ='kb7gjyaiHnFEE11dBRUQNxFRxqZSuWuZ';
  gifs = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getTrendingGifs() {
    const url = `${this.apiUrl}/trending?api_key=${this.apiGiphyKey}&limit=8`;
    return this.http.get(url)
    .subscribe((response:any) => {
      this.gifs.next(response.data)
    });
  }

  searchGifs(gifName: string) {
    const url = `${this.apiUrl}/search?q=${gifName}&api_key=${this.apiGiphyKey}&limit=8`;
    return this.http.get(url)
    .subscribe((response:any) => {
      this.gifs.next(response.data)
    });
  
  }

  getGifs() {
    return this.gifs.asObservable();
  }
}
