import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioVotanteListService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<any>{
   return this.httpClient.get("//localhost:8080/UsuarioVotante/Lista")

  }
}
