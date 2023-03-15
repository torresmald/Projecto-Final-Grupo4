import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/core/models/api-student.model';
import { ApiStudentsService } from 'src/app/core/services/students/api-students.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public students:Student[] = [];

  constructor(private router: Router, private apiService: ApiStudentsService){

    


  }
  
  public ngOnInit(): void {

    this.apiService.getAllStudens().subscribe((value) => { this.students = value})
  }


  public goToTeachers(){
    this.router.navigate(['register/teachers'])
  }

  
  public goToFamilies(){
    this.router.navigate(['register/families'])
  }

  public apiTest(){
    console.log(this.students);
  }
 


}



