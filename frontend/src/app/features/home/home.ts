import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { YoutubeService } from '../../core/services/youtube.service'
import { FavoriteService } from '../../core/services/favorite.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  private youtubeService = inject(YoutubeService);
  private favoriteService = inject(FavoriteService);

  searchText = '';

  videos: any[] = [];

  searchVideos() {

    if (!this.searchText.trim()) {
      return;
    }

    this.youtubeService.search(this.searchText)
      .subscribe((response: any) => {

        this.videos = response.items;

      });

  }

  addFavorite(video: any): void {

    const favorite = {

      videoId: video.id.videoId,

      title: video.snippet.title,

      thumbnail: video.snippet.thumbnails.medium.url,

      channel: video.snippet.channelTitle

    };

    this.favoriteService.add(favorite).subscribe({

      next: () => {

        alert('Video agregado a favoritos');

      },

      error: (err) => {

        if (err.status === 409) {

          alert("Este video ya está en tus favoritos.");

          return;

        }

        if (err.status === 401) {

          alert("Tu sesión ha expirado. Inicia sesión nuevamente.");

          return;

        }

        alert("Ocurrió un error al guardar el favorito.");

      }

    });

  }

}