import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private dataSource = new BehaviorSubject('');
  currentData = this.dataSource.asObservable();
  usuario: any;

  constructor(private http:HttpClient) { }

  changeData(data: string) {
    this.dataSource.next(data);
  }

  getProfileInfo(usuario: string){ // Retorna Observable com as infos do http do usuario    
    return this.http.get("https://api.github.com/users/"+usuario).map(res => res); 
  }

  getProfileRepos(usuario: string){ // Retorna Observable com as infos do http do repositorio do usuario
    return this.http.get("https://api.github.com/users/"+usuario+"/repos").map(res => res); 
  }
}
