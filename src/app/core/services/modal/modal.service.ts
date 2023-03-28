import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public shouldShowModal$: ReplaySubject<boolean> =  new ReplaySubject<boolean>();
  public modalMessage$: ReplaySubject<string> = new ReplaySubject<string>();
  public result$: Subject<boolean> = new Subject<boolean>();
 
  
  constructor() {
    this.shouldShowModal$.next(false);
   }

  public showModal(message: string) {
    this.shouldShowModal$.next(true);
    this.modalMessage$.next(message);
  }
  public closeModal(result: boolean) {
    this.shouldShowModal$.next(false);
  }
}
/* Este es un servicio  con el decorador @Injectable y varias propiedades observables. La propiedad shouldShowModal$ se utiliza para controlar si se debe mostrar o no un modal, modalMessage$ se utiliza para mostrar un mensaje dentro del modal y result$ se utiliza para pasar el resultado seleccionado por el usuario al cerrar el modal. La clase ModalService también tiene dos métodos públicos, showModal() para mostrar el modal y closeModal() para cerrar el modal y pasar el resultado seleccionado.*/