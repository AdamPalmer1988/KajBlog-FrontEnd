import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { FavoritesService } from '../../services/favorites.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-favorites-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './favorites-list.component.html',
  styleUrl: './favorites-list.component.css'
})
export class FavoritesListComponent implements OnInit {
  favorites: Blog[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favoritesService.getFavorites().subscribe(
      (data) => this.favorites = data,
      (error) => console.error('Error fetching favorites', error)
    );
  }

  addFavorite(blogId: number): void {
    this.favoritesService.addFavorite(blogId).subscribe(
      () => this.loadFavorites(),
      (error) => console.error('Error adding favorite', error)
    );
  }

  removeFavorite(id: number): void {
    this.favoritesService.removeFavorite(id).subscribe(
      () => this.loadFavorites(),
      (error) => console.error('Error removing favorite', error)
    );
  }
}
