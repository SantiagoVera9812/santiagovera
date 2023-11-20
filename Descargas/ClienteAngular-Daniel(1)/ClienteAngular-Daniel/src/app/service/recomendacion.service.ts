import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recomendacion } from '../modelo/recomendacion.interface';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecomendacionService {

  GeneroURL = 'http://localhost:8080/Recomendacion';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Recomendacion[]> {
    return this.httpClient.get<Recomendacion[]>(this.GeneroURL +'/Lista');
  }

  public save(producto: Recomendacion): Observable<any> {
    return this.httpClient.post<any>(this.GeneroURL +'/Agregar', producto);
  }

}