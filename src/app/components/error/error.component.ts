import { Component, OnDestroy } from '@angular/core';
import { ErrorService } from '../../services/error.service';
import { Subscription } from 'rxjs/Subscription';
import { faFrown } from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnDestroy {

  message1: string = '';  
  message2: string = '';  
  subscription: Subscription;
  sadFace = faFrown; // Ícone

  constructor(private errorService: ErrorService) {
      this.subscription = this.errorService.update$.subscribe(
          message => {
              if(message[0] == ''){ // Mensagem[0] == 0 -> Página não existe
                this.message1 = '404';
                this.message2 = 'Página não encontrada';
              }
              else{
                this.message1 = message[0];
                this.message2 = message[1];
              }
          });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
