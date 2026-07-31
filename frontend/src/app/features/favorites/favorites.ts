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

  constructor() {
    console.log('Constructor Favorites');
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.loadFavorites();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  loadFavorites() {

    console.log('Entró a loadFavorites');

    this.favoriteService.getByUser(1).subscribe({

      next: (data: any) => {

        console.log('Respuesta API:', data);

        this.favorites = data;
        this.cdr.detectChanges();

        console.log('Asignado:', this.favorites);
        console.log('Length después de asignar:', this.favorites.length);


      },

      error: (err) => {

        console.error('Error:', err);

      }

    });


  }

  removeFavorite(id: number) {
    this.favoriteService.remove(id).subscribe(() => {
      this.loadFavorites();
    })
  }
}
