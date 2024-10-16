import { Component } from '@angular/core';
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

}
