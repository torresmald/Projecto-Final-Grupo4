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

  public showModal(message: string ) {
    this.shouldShowModal$.next(true);
    this.modalMessage$.next(message);
    console.log(message);
    
  }
  public closeModal(result: boolean) {
    this.shouldShowModal$.next(false);
  }
}
