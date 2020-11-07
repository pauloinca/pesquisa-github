import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']  
})


export class UsuarioComponent implements OnInit {
  data: string;
  usuario: any;

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.currentData.subscribe(data => {
      this.data = data;
      this.usuarioService.getProfileInfo(this.data).subscribe(usuario => {
        this.usuario = usuario;      
      });
    });
  }

  ngOnInit(): void {
  }

}
