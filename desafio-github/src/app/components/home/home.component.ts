import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values = '';

  constructor(private usuarioService:UsuarioService, private router:Router, private route:ActivatedRoute) {

  }

  onKey(event: any){
    this.values = event.target.value; // this.values = valor digitado no input
  }

  enterPress(url){
    // this.usuarioService.getProfileInfo(this.values).subscribe(usuario => {
    //   this.usuario = usuario;         
    // });
    // this.usuarioService.currentData.subscribe(data => )
    this.usuarioService.changeData(this.values);
    this.router.navigate([url,this.values]);
  }

  ngOnInit(): void {
    
  }

}
