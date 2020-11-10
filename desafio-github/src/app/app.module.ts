import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioService } from './services/usuario.service'

import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatGridListModule } from '@angular//material/grid-list'
import { MatIconModule } from '@angular//material/icon'
import { MatTableModule } from '@angular//material/table'
import { MatSortModule } from '@angular//material/sort';
import { MatTooltipModule } from '@angular//material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatTooltipModule,
    MatDialogModule,
    FontAwesomeModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent],
  entryComponents: [ErrorDialogComponent]
})
export class AppModule { }
