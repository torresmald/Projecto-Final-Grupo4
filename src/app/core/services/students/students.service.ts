import { Injectable } from '@angular/core';
import { ApiStudentsService } from './api/api-students.service';
import { Observable, map, tap } from 'rxjs';
import { Students } from './../../models/Students/transformed/students.model';
import { ApiStudents } from './../../models/Students/api/api-students.model';
import { transformDataStudents } from './helpers/students.helper';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private studentsdService: ApiStudentsService, private loadingService: LoadingService) {}

  public getStudents(): Observable<Students[]> {
    this.loadingService.showLoading();
    return this.studentsdService.getAllStudens().pipe(
      map((students: ApiStudents[]) => {
        return students.map((student: ApiStudents) => transformDataStudents(student));
      }),
      tap(() => this.loadingService.hideLoading())
    )
  }
  public getStudentDetail(id: string) : Observable<Students> {
    this.loadingService.showLoading();
    return this.studentsdService.getStudentDetail(id).pipe(
      map((student: ApiStudents) => transformDataStudents(student)
      ),
      tap(() => this.loadingService.hideLoading())
    )
  }
}
/* Este código define una clase StudentsService con dos métodos que se encargan de interactuar con una API para obtener y obtener los detalles de un estudiante.  */