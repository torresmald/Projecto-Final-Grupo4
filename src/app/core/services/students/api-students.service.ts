import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../models/api-student.model';
const API_SEMILLA = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ApiStudentsService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllStudens(): Observable<Student[]>{
    return this.http.get<Student[]>(`${API_SEMILLA}/students`)
  }
}
 