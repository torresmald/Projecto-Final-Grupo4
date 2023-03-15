import { Component } from '@angular/core';

import { ApiStudentsService } from './core/services/students/api-students.service';
import { Students } from './core/models/Students/transformed/students.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-final-grupo4';
  public students: Students[] = [];



  constructor(private apiService: ApiStudentsService){

    this.apiService.getAllStudens().subscribe((value) => { this.students = value});
  }

  testApi(){
    console.log(this.students);
  }
}
