import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ParentsService } from 'src/app/core/services/parents/parents.service';
import { TeachersService } from './../../core/services/teachers/teachers.service';
import { CourierService } from 'src/app/core/services/courier/courier.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal/modal.service';
const TOKEN_KEY = 'user-token-key';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm?: FormGroup;
  public teacher: boolean = false;
  public isUserLogged: boolean = false;
  public alertSuccess: boolean = false;
  public alertError: boolean =  false;
  public msg: string = '';
  public formErr: string = '';
  public name: string = '';
  public isAdmin: boolean  = false;
  public errors?: string = '';

  ngOnInit(): void {
    this.loginForm = this.loginBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  constructor(
    private loginBuilder: FormBuilder,
    private serviceTeacher: TeachersService,
    private serviceParents: ParentsService,
    private msgCourier: CourierService,
    public router: Router,
    private modalService: ModalService
  ) {
    this.msgCourier.isTeacher.subscribe((value) => {
      this.teacher = value;
    });
  }

  public userLogin() {
    if (this.loginForm?.valid) {
      const request = this.teacher
        ? this.serviceTeacher.loginTeacher(this.loginForm?.value)
        : this.serviceParents.loginParent(this.loginForm?.value);

      request.subscribe({
        next: () => {
            if (this.teacher) {
              this.isUserLogged = true;
              this.serviceTeacher.userLogged$.next(true);
              const authToken = localStorage.getItem(TOKEN_KEY);
              authToken ? (this.name = JSON.parse(authToken).user.name) : null;
              authToken ? (this.isAdmin = JSON.parse(authToken).user.admin) : null;
              this.msg = `Has iniciado sesión correctamente ${this.name}`;
              this.alertSuccess = true;
              this.loginForm?.reset();
              if(this.isAdmin){
                this.alertSuccess = true;
                setTimeout(() => {
                  this.router.navigate(['/home']);
                  this.alertSuccess = false;
                }, 4000);
                return;
              }
              setTimeout(() => {
                this.router.navigate(['/teacherView']);
                this.alertSuccess = false;
              }, 4000);
            } else {
              this.isUserLogged = true;
              this.serviceTeacher.userLogged$.next(true);
              const authToken = localStorage.getItem(TOKEN_KEY);
              authToken ? (this.name = JSON.parse(authToken).user.email) : null;
              this.msg = `Has iniciado sesión correctamente ${this.name}`;
              this.alertSuccess = true;
              this.loginForm?.reset();
              setTimeout(() => {
                this.router.navigate(['/familyView']);
              }, 4000);
            }
        },
        error: (error) => {
          this.errors = error.error;
        },
      });
    } else {
      this.alertError = true;
      setTimeout(() => {
        this.alertError = false;
      }, 4000);
    }
  }

  public isFamily() {
    this.teacher = !this.teacher;
  }
}
/* El código importa diferentes servicios y bibliotecas  para construir un formulario de inicio de sesión. El componente "LoginComponent" contiene propiedades que controlan el estado del formulario y realiza validaciones sobre los campos requeridos. Cuando el usuario envía el formulario, se llama a la función "userLogin". Dependiendo del valor booleano del campo "teacher", se usa un servicio diferente para realizar la autenticación con sus respectivas respuestas de éxito o error. Además, dependiendo si el usuario es administrador o si ha iniciado sesión como profesor o padre/estudiante, puede haber redirecciones específicas después de haber iniciado sesión satisfactoriamente. */