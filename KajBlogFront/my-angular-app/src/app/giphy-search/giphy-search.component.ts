import { Component } from '@angular/core';
import { GiphyService } from '../giphy.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-giphy-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './giphy-search.component.html',
  styleUrl: './giphy-search.component.css'
})
export class GiphySearchComponent {
  gifs: any[] = [];
  query: string = "";

  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void{
    this.trending();
  }

  search(): void {
    this.giphyService.search(this.query).subscribe(response => {this.gifs = response.data;})
  }

  trending(): void {
    this.giphyService.trending().subscribe(response => {this.gifs = response.data});
  }

}
