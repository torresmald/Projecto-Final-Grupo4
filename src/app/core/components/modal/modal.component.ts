import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public shouldShowModal? : boolean;
  public modalMessage?: string;
  public loginModal?: boolean;
// mostrar un modal en la interfaz de usuario. Tiene tres propiedades públicas: shouldShowModal, modalMessage y loginModal// 
  constructor(private  modalService: ModalService) {}
  
  public ngOnInit(): void {
    this.modalService.shouldShowModal$.subscribe((value) => {
      this.shouldShowModal = value
    });
    this.modalService.modalMessage$.subscribe((message) => {
      this.modalMessage = message
    })
  }
  
  public confirm(cancel: boolean){
    this.modalService.closeModal(cancel)
    this.modalService.result$.next(cancel); 
  }
}
//El código define una clase ModalComponent con un constructor que recibe ModalService. En ngOnInit se suscribe a dos observables del ModalService, shouldShowModal$ y modalMessage$, y actualiza las propiedades shouldShowModal y modalMessage con los valores emitidos. Además, tiene un método confirm que recibe un booleano y cierra el modal usando el ModalService y emitiendo el valor booleano usando result$.//