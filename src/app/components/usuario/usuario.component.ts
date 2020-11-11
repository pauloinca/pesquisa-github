import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ErrorService } from '../../services/error.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit, AfterViewInit {
  // Font-Awesome Icons
  faEnvelope = faEnvelope;
  faLink = faLink;
  faNome = faUserCircle;
  faSeguidores = faUsers;
  faSeguindo = faUserCheck;
  faBiografia = faBookOpen;

  usuario: any; // Observable com as infos do usuario
  repos: any; // Observable com as infos do repositório
  displayedColumns: string[] = [
    'name',
    'description',
    'stargazers_count',
    'language',
    'svn_url',
  ];
  dataSource: any;
  userName: any; // Nome do usuário
  loading: boolean = true; // Avisa se a página está carregando ou não

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private usuarioService: UsuarioService,
    private errorService: ErrorService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.loading = true;

    this.router.paramMap.subscribe(
      (params) => {
        this.userName = params.get('usuario');
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngAfterViewInit() {
    // Pego as informaçoes do usuario
    this.usuarioService.getProfileInfo(this.userName).subscribe(
      (usuario) => {
        this.usuario = usuario;
      },
      (err) => {
        console.log(err);
        this.processError();
      }
    );

    // Pego as informações dos repositórios dos usuarios e dou um sort
    this.usuarioService.getProfileRepos(this.userName).subscribe(
      (repos) => {
        this.repos = repos;
        this.dataSource = new MatTableDataSource(this.repos);
        this.dataSource.sort = this.sort;
      },
      (err) => {
        console.log(err);
        this.processError();
      }
    );

    this.loading = false;
  }

  processError() {
    this.errorService.updateMessage('Erro!!','Usuário não encontrado');
    this.route.navigate(['error']);
  }
}
