import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Genero } from '../modelo/genero.interface';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  GeneroURL = 'http://localhost:8080/Genero';

  constructor(private httpClient: HttpClient) { }

  private generoClickSource = new Subject<Genero>();

  generoClick$ = this.generoClickSource.asObservable();

  triggerGeneroClick(genero: Genero) {
    this.generoClickSource.next(genero);
  }

  public lista(): Observable<Genero[]> {
    return this.httpClient.get<Genero[]>(this.GeneroURL +`/Lista`);
  }

  public detail(id: number): Observable<Genero> {
    return this.httpClient.get<Genero>(this.GeneroURL +`/Buscar/${id}`);
  }

  public save(producto: Genero): Observable<any> {
    return this.httpClient.post<any>(this.GeneroURL +`/Agregar`, producto);
  }

  public update(id: number, producto: Genero): Observable<any> {
    return this.httpClient.put<any>(this.GeneroURL +`/Actualizar`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.GeneroURL +`/Borrar/${id}`);
  }
}