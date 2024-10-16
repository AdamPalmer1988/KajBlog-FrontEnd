import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-gifs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gifs.component.html',
  styleUrl: './gifs.component.css'
})
export class GifsComponent  {

  constructor(private giphyService: GiphyService ) {}
  gifs: any[] = []; 


  ngOnInit(): void {
    this.giphyService.getTrendingGifs();
    this.giphyService.getGifs()
    .subscribe((response: any) => {
      this.gifs = response;
      console.log(response)
    });
  }
}

