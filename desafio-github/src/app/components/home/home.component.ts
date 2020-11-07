import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario: any;
  values = '';


  constructor(private usuarioService:UsuarioService) {

  }

  onKey(event: any){
    this.values = event.target.value;
  }

  enterPress(){
    this.usuarioService.getProfileInfo(this.values).subscribe(usuario => {
      this.usuario = usuario;   
      console.log(this.usuario.login);   
    });
  }

  ngOnInit(): void {
    
  }

}
