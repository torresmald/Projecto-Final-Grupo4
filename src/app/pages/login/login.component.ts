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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm?: FormGroup;
  public teacher: boolean = false;
  public isUserLogged: boolean = false;
  public flag: boolean = false;

  ngOnInit(): void {
    this.loginForm = this.loginBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  constructor(
    private loginBuilder: FormBuilder,
    private serviceTeacher: TeachersService,
    private serviceParents: ParentsService,
    private msgCourier: CourierService,
    private router: Router,
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
          this.router.navigate(['/teacherView']);
          this.modalService.showModal('Logado como Profesor');
        } else {
          this.isUserLogged = true;
          this.modalService.showModal('Logado como Padre');
          this.router.navigate(['/familyView']);
        }
      });
    } else {
      alert('error al iniciar sesion');
    }
  }


  public isFamily(){

    this.teacher = !this.teacher
}

}