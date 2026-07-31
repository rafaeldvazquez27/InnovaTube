import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})


export class YoutubeService {
    private http = inject(HttpClient);

    private apiKey = 'AIzaSyDC7tDizSk79Ih2u6MHxk84jdz0WxgvyZk';

    search(query: string) {

        return this.http.get(
            'https://www.googleapis.com/youtube/v3/search',
            {
                params: {
                    part: 'snippet',
                    q: query,
                    type: 'video',
                    maxResults: 10,
                    key: this.apiKey
                }
            }
        );

    }
}