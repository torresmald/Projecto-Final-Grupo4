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
import { ValidationErrors } from '@angular/forms';
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
  public alertError: boolean = false;
  public msg: string = '';
  public formErr: string = '';

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

      request.subscribe(() => {
        if (this.teacher) {
          this.isUserLogged = true;
          this.serviceTeacher.userLogged$.next(true);
          let teacherName = '';
          const authToken = localStorage.getItem(TOKEN_KEY);
          authToken ? (teacherName = JSON.parse(authToken).user.name) : null;
          this.msg = `Bienvenido ${teacherName}`;
          this.alertSuccess = true;
          setTimeout(() => {
            this.router.navigate(['/teacherView']);
           
            this.alertSuccess = false;
          }, 3000);
        } else {
          this.isUserLogged = true;
          this.serviceTeacher.userLogged$.next(true);
          this.msg = 'Bienvenido';
          this.alertSuccess = true;
          setTimeout(() => {
            this.router.navigate(['/familyView']);
          }, 3000);
        }
      });
    } else {
      this.alertError = true;
      setTimeout(() => {
        this.alertError = false;
      }, 3000);
    }
  }

  public isFamily() {
    this.teacher = !this.teacher;
  }
}
