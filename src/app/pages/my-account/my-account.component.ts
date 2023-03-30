import { Component, OnInit } from '@angular/core';
import { ApiParents } from 'src/app/core/models/Parents/api/api-parents.model';
import { ApiTeachers } from 'src/app/core/models/Teachers/api/api-teachers.model';
const TOKEN_KEY = 'user-token-key';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  public token? : ApiTeachers & ApiParents;
  public messageName?: string;
  public messageEmail?: string;
  public isTeacher?: boolean = false;

  constructor(){
    
  }
  ngOnInit(): void {
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user) : null;
    this.messageName = `Nombre ${this.token}`;
    this.messageEmail = `Email ${this.token}`;
    this.isTeacher = this.token?.grade.includes('');
  }
}

/* Este código importa módulos tales como 'Router' y servicios personalizados como 'CourierService' y 'TeachersService'. En el constructor, hay inyección de dependencias para el servicio del router y la mensajería. También tiene dos métodos públicos: "goToTeachers" y "goToFamilies", que utilizan mensajes a través del servicio Courier para indicar si el usuario es un maestro o no, respectivamente, antes de direccionarlo al componente "login". */