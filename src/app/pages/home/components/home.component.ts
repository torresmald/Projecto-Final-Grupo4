import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourierService } from 'src/app/core/services/courier/courier.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router,
    private msgCourier: CourierService
  ){}

  public goToTeachers(){
    this.msgCourier.trueTeacher();
    console.log('maestro')
    this.router.navigate(['login']);
  }

  public goToFamilies(){
    this.msgCourier.falseTeacher();
    console.log('familia')
    this.router.navigate(['login']);
  }


}