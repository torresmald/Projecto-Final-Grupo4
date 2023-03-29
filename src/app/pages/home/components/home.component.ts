import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourierService } from 'src/app/core/services/courier/courier.service';
import { TeachersService } from 'src/app/core/services/teachers/teachers.service';


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
    this.router.navigate(['login']);
  }
  public goToFamilies(){
    this.msgCourier.falseTeacher();
    this.router.navigate(['login']);
  }
}
/* Este código importa módulos tales como 'Router' y servicios personalizados como 'CourierService' y 'TeachersService'. En el constructor, hay inyección de dependencias para el servicio del router y la mensajería. También tiene dos métodos públicos: "goToTeachers" y "goToFamilies", que utilizan mensajes a través del servicio Courier para indicar si el usuario es un maestro o no, respectivamente, antes de direccionarlo al componente "login". */