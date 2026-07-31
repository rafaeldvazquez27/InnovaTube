import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private http = inject(HttpClient);

  private api = 'http://localhost:3000/api/favorites';

  getFavorites() {

    const token = localStorage.getItem('token');

    return this.http.get(
      this.api,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

  }

  add(favorite: any) {

    const token = localStorage.getItem('token');

    return this.http.post(
      this.api,
      favorite,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

  }

  remove(id: number) {

    const token = localStorage.getItem('token');

    return this.http.delete(
      `${this.api}/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

  }

}