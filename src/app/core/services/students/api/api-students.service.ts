import { ApiStudents } from '../../../models/Students/api/api-students.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from './../../../models/Students/transformed/students.model';
const API_SEMILLA = "https://apicolegiosemilla.up.railway.app";

@Injectable({

  providedIn: 'root'
  
})
export class ApiStudentsService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllStudens(): Observable<ApiStudents[]>{
    return this.http.get<ApiStudents[]>(`${API_SEMILLA}/students`)
  }
  public getStudentDetail(id: string): Observable<ApiStudents>{
    return this.http.get<ApiStudents>(`${API_SEMILLA}/students/${id}`)
  }

  public postNewStudent(body: FormData): Observable<ApiStudents>{
    return this.http.post<ApiStudents>(`${API_SEMILLA}/students`, body)
  }
}
 /* Este código define un servicio llamado ApiStudentsService, el cual tiene métodos para interactuar con una API para obtener, crear y eliminar estudiantes.*/