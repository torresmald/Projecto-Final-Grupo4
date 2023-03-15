import { ApiStudents } from '../../models/Students/api/api-students.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_SEMILLA = "http://localhost:3000";

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
}
 