import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TrackDeAlbumService {

  private apiUrl = 'http://localhost:8080/Album';


  constructor(private http: HttpClient) {}


  getAlbumById(albumId: string): Observable<any> {
    const url = `${this.apiUrl}/Buscar/${albumId}`;
    return this.http.get(url);
  }
}
