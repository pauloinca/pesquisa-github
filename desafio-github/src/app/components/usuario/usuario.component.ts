import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service'
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']  
})


export class UsuarioComponent implements OnInit, AfterViewInit {
  faCoffee = faCoffee;
  faLink = faLink;
  data: string;
  usuario: any;
  repos: any;
  displayedColumns: string[] = ['name', 'description', 'stargazers_count', 'language', 'svn_url'];
  dataSource: any

  @ViewChild (MatSort) sort: MatSort;

  constructor(private usuarioService: UsuarioService) {

  }

  ngOnInit(){

  }

  ngAfterViewInit(){
    this.usuarioService.currentData.subscribe(data => {
      this.data = data;
      this.usuarioService.getProfileInfo(this.data).subscribe(usuario => {
        this.usuario = usuario;      
      });

      this.usuarioService.getProfileRepos(this.data).subscribe(repos => {
        this.repos = repos;        
        this.dataSource = new MatTableDataSource(this.repos);
        this.dataSource.sort = this.sort;        
      });

    });
  }

}
