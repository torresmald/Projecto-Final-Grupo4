import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiTeachers } from 'src/app/core/models/Teachers/api/api-teachers.model';
import { ApiUsers } from 'src/app/core/models/Users/api/api-users.model';
const teachers = 'teachers';
const register = 'register';
const login = 'login';
const API_URLS = {
  DOMAIN: 'https://apicolegiosemilla.up.railway.app/',
  TEACHERS: 'teachers/'
}
@Injectable({
  providedIn: 'root'
})
export class ApiTeachersService {
  private TEACHERS_URL = `${API_URLS.DOMAIN}${API_URLS.TEACHERS}`;
  constructor(private request:HttpClient) { }

  public loginApiTeacher(body: ApiTeachers): Observable<ApiUsers>{
    return this.request.post<ApiUsers>(`${API_URLS.DOMAIN}${teachers}/${login}`, body);
  }

  public registerApiTeacher(body: ApiTeachers): Observable<ApiUsers>{
    return this.request.post<ApiUsers>(`${API_URLS.DOMAIN}${teachers}/${register}`, body);
  }
}
/* Este servicio tiene dos métodos para interactuar con la API de profesores. El primero es para iniciar sesión y el segundo es para registrarse. */