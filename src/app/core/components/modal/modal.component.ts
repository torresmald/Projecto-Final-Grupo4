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
