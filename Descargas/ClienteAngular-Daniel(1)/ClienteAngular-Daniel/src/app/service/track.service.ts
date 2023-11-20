import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Track } from '../modelo/track.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrackService {

  TrackURL = 'http://localhost:8080/Track';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Track[]> {
    return this.httpClient.get<Track[]>(this.TrackURL +`/Lista`);
  }

  public detail(id: number): Observable<Track> {
    return this.httpClient.get<Track>(this.TrackURL +`/Buscar/${id}`);
  }

  public save(producto: Track): Observable<any> {
    return this.httpClient.post<any>(this.TrackURL +`/Agregar`, producto);
  }

  public update(producto: Track): Observable<any> {
    return this.httpClient.put<any>(this.TrackURL +`/Actualizar`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.TrackURL +`/Borrar/${id}`);
  }
}