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