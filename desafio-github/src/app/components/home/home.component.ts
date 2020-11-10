import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'
import { Router, ActivatedRoute } from '@angular/router'
import { MatDialog } from '@angular/material/dialog'
import { ErrorDialogComponent } from '../../dialogs/error-dialog/error-dialog.component'

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values = '';  
  faPesquisa = faSearch;

  constructor(private usuarioService:UsuarioService, private router:Router, private route:ActivatedRoute, public dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(ErrorDialogComponent);
  }

  onKey(event: any){
    this.values = event.target.value; // this.values = valor digitado no input
  }

  enterPress(url){

    this.usuarioService.getProfileInfo(this.values).subscribe(
      () => {
        this.router.navigate([url,this.values]);
      },
      () => {
        this.openDialog();
      }
    );


    // this.usuarioService.getProfileInfo(this.values).subscribe(usuario => {
    //   this.usuario = usuario;         
    // });
    // this.usuarioService.currentData.subscribe(data => )
    // this.usuarioService.changeData(this.values);

  }

  ngOnInit(): void {
    
  }

}
