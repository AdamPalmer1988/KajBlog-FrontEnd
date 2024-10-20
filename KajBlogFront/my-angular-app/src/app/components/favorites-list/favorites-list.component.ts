import { Component } from '@angular/core';
import { Favorite } from '../../models/favorite';
import { FavoritesService } from '../../services/favorites.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites-list.component.html',
  styleUrl: './favorites-list.component.css'
})
export class FavoritesListComponent {
  favorites: Favorite[] = [];
  userId: number = 1;

  constructor(private FavoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites() {
    this.FavoritesService.getFavoritesByUserId(this.userId).subscribe(data => {
      this.favorites = data;
      console.log(this.favorites);
    });
  }

  addFavorite(blogId: number) {
    const newFavorite: Favorite = { UserId: this.userId, BlogId: blogId, Id: 0  };
    this.FavoritesService.createFavorite(newFavorite).subscribe(() => {
      this.loadFavorites(); 
    });
  }

  removeFavorite(id: number) {
    this.FavoritesService.deleteFavorite(id).subscribe(() => {
      this.loadFavorites(); // Refresh the list
    });
  }
}
