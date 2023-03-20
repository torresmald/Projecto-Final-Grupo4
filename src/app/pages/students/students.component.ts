import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Students } from 'src/app/core/models/Students/transformed/students.model';
import { StudentsService } from 'src/app/core/services/students/students.service';
const TOKEN_KEY = 'user-token-key';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {


    public students: Students[] = [];
    public grade?: string[];
    public token?: string[];
    constructor(private studentsService: StudentsService, private router: Router) {
      const authToken = localStorage.getItem(TOKEN_KEY);
      authToken ? (this.token = JSON.parse(authToken).user.grade) : null;
      this.studentsService
        .getStudents()
        .subscribe((value) => this.students = value.filter((grade) => grade.grade === this.token
        ))
    }
    public goDetail(id: string){
      this.router.navigate(['/studentDetail', id])
    }
    public goBack(): void{
      this.router.navigate(['teacherView']);
    }
    
  }
  

 
  

