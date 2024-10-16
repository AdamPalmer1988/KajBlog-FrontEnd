import { Component } from '@angular/core';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

constructor(private giphyService : GiphyService) {}

ngOnInit(): void {

}

search(searchTerm: string) {
  if (searchTerm !== '') {
    this.giphyService.searchGifs(searchTerm);
    }
  }
}


