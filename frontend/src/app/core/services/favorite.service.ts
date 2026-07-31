import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private http = inject(HttpClient);

  private api = 'http://localhost:3000/api/favorites';

  add(favorite: any) {

    return this.http.post(
      this.api,
      favorite
    );

  }

  getByUser(userId: number) {

    return this.http.get(
      `${this.api}/${userId}`
    );

  }

  remove(id: number) {

    return this.http.delete(
      `${this.api}/${id}`
    );

  }

}