import { Parents } from './../../core/models/Parents/transformed/parents.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Students } from 'src/app/core/models/Students/transformed/students.model';
import { StudentsService } from 'src/app/core/services/students/students.service';

const TOKEN_KEY = 'user-token-key';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {
  public student? : Students;
  public students: Students[] = [];
  public grade?: string[];
  public token?: string[];
  public tutors?: Parents[];
  
  constructor(private activatedRoute: ActivatedRoute, private studentService: StudentsService) {
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user.grade) : null;
    this.studentService
      .getStudents()
      .subscribe((value) => this.students = value.filter((grade) => grade.grade === this.token
      ))
    this.activatedRoute.params.subscribe((params) => {
      const studentId = params['id'];
      this.studentService.getStudentDetail(studentId).subscribe((student) => this.student = student)
    })
    
  }
 
 
  }

 

