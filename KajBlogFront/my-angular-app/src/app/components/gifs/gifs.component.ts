import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphyService } from '../../services/giphy.service';
import { SearchComponent } from "../search/search.component";
import { EventEmitter} from '@angular/core'


@Component({
  selector: 'app-gifs',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './gifs.component.html',
  styleUrl: './gifs.component.css'
})
export class GifsComponent  {
@Output() gifEvent = new EventEmitter<string>();

  constructor(private giphyService: GiphyService ) {}
  gifs: any[] = []; 
  downSizedUrl: string = '';



  ngOnInit(): void {
    this.giphyService.getTrendingGifs();
    this.giphyService.getGifs()
    .subscribe((response: any) => {
      this.gifs = response;
      console.log(response)
    });
  }

getGifUrl(event:Event, gif : any): void {
    event.preventDefault();
    console.log('Gif clicked!');
    this.gifEvent.emit(gif.images.downsized.url)
    console.log(this.downSizedUrl)
}

}

