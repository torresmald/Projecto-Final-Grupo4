import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourierService {
  public isTeacher: ReplaySubject<boolean> = new ReplaySubject<boolean>;
  
  constructor() { 
    this.isTeacher.next(false);
  }


  public trueTeacher() {

    this.isTeacher.next(true);
  }

  public falseTeacher() {

    this.isTeacher.next(false);
  }
}
// Este es un servicio  con el decorador @Injectable y una propiedad observable llamada isTeacher que almacena valores booleanos usando ReplaySubject. También tiene dos métodos públicos, trueTeacher() y falseTeacher(), que establecen el valor de la propiedad isTeacher en true o false respectivamente.//