import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoriteService } from '../../core/services/favorite.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites implements OnInit {
  private favoriteService = inject(FavoriteService);
  private cdr = inject(ChangeDetectorRef);
  favorites: any[] = [];
  searchText = '';

  constructor() {  }

  ngOnInit(): void {
    this.loadFavorites();
  }

  ngOnDestroy(): void {
  }

  loadFavorites() {

  this.favoriteService.getFavorites().subscribe({

    next: (data: any) => {

      this.favorites = data;

      this.cdr.detectChanges();

    },

    error: (err) => {

      console.error(err);

    }

  });

}

  removeFavorite(id: number) {
    this.favoriteService.remove(id).subscribe(() => {
      this.loadFavorites();
    })
  }
}
