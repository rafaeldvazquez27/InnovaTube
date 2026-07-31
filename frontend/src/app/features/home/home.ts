import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { YoutubeService } from '../../core/services/youtube.service'

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  private youtubeService = inject(YoutubeService);

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

}