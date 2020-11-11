import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class ErrorService {
  // Passo a mensagem (em caso de erro) pelo BehaviorSubject  
  private updateSubject: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(['','']);

  // Transformo BehaviorSubject em um Observable
  update$: Observable<Array<string>> = this.updateSubject.asObservable();

  constructor() { }

  // Update na mensagem
  updateMessage(message1, message2: string) {        
      this.updateSubject.next([message1, message2]);
  }
}
