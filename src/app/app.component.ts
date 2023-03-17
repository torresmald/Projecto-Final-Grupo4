import { Component } from '@angular/core';
import { ApiStudentsService } from './core/services/students/api/api-students.service';
import { Students } from './core/models/Students/transformed/students.model';
import { StudentsService } from './core/services/students/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-final-grupo4';



  constructor(public _router: Router){}

}


