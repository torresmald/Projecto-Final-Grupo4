import { Injectable } from '@angular/core';
import { ApiStudentsService } from './api/api-students.service';
import { Observable, map } from 'rxjs';
import { Students } from './../../models/Students/transformed/students.model';
import { ApiStudents } from './../../models/Students/api/api-students.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private studentsdService: ApiStudentsService) { }

  public getCleanStudents(): Observable<Students[]> {
    return this.studentsdService.getAllStudens().pipe(
      map((students: ApiStudents[]) => {
        return students.map((student: ApiStudents) => {

          delete student.createdAt;
          delete student.__v;
          delete student._id;
          delete student.updatedAt;
          return student;


        })
      })
    )

  }


}
