import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../modelo/album.interface';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albumURL = 'http://localhost:8080/Album';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.albumURL +`/Lista`);
  }

  public detail(id: number): Observable<Album> {
    return this.httpClient.get<Album>(this.albumURL +`/Buscar/${id}`);
  }

  public save(producto: Album): Observable<any> {
    return this.httpClient.post<any>(this.albumURL +`/Agregar`, producto);
  }

  public update(id: number, producto: Album): Observable<any> {
    return this.httpClient.put<any>(this.albumURL +`/Actualizar`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.albumURL +`/Borrar/${id}`);
  }
}