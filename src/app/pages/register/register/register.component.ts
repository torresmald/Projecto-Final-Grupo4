import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { ParentsService } from 'src/app/core/services/parents/parents.service';
import { TeachersService } from 'src/app/core/services/teachers/teachers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public userRegister?: FormGroup;
  public errors?: string = '';
  public currentRoute?: string;

  constructor(
    private fb: FormBuilder,
    private parentsService: ParentsService,
    private teachersService: TeachersService,
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
    this.createNewForm();
  }

  ngOnInit(): void {}
  public createNewForm() {
    this.userRegister = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public login() {
    if (this.currentRoute === '/register/families') {
      const userRequest = this.parentsService.loginParent(
        this.userRegister?.value
      );
      userRequest.subscribe({
        next: () => {
          this.userRegister?.reset();
          this.router.navigate(['parents']);
        },
        error: (error) => {
          this.errors = error.error;
        },
      });
    } else {
      const userRequest = this.teachersService.loginTeacher(
        this.userRegister?.value
      );
      userRequest.subscribe({
        next: () => {
          this.userRegister?.reset();
          this.router.navigate(['teachers']);
        },
        error: (error) => {
          this.errors = error.error;
        },
      });
    }
  }
}
