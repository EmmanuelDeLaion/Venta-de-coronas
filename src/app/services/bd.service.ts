import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  url:string = 'http://localhost:8080/coronav/';

  constructor(private http: HttpClient) { }

  agregarUsuario(usuario){
    return this.http.post(this.url+'agregarUsuarios.php', {usuario});
  }

}
