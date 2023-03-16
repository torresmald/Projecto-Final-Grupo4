import { Injectable } from '@angular/core';
import { ApiStudentsService } from './api/api-students.service';
import { Observable, map } from 'rxjs';
import { Students } from './../../models/Students/transformed/students.model';
import { ApiStudents } from './../../models/Students/api/api-students.model';
import { transformDataStudents } from './helpers/students.helper';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private studentsdService: ApiStudentsService) {}

  public getStudents(): Observable<Students[]> {
    return this.studentsdService.getAllStudens().pipe(
      map((students: ApiStudents[]) => {
        return students.map((student: ApiStudents) => transformDataStudents(student));
      })
    );
  }
  public getStudentDetail(id: string) : Observable<Students> {
    return this.studentsdService.getStudentDetail(id).pipe(
      map((student: ApiStudents) => transformDataStudents(student)
      )
    )
  }
}
