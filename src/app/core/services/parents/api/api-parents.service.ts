import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiParents } from 'src/app/core/models/Parents/api/api-parents.model';
import { Parents } from 'src/app/core/models/Parents/transformed/parents.model';
import { ApiUsers } from 'src/app/core/models/Users/api/api-users.model';
const parents = 'parents';
const register = 'register';
const login = 'login';
const API_URLS = {
  DOMAIN: 'http://localhost:3000/',
  PARENTS: 'parents/'
}

@Injectable({
  providedIn: 'root'
})
export class ApiParentsService {
  private PARENTS_URL = `${API_URLS.DOMAIN}${API_URLS.PARENTS}`;
  constructor(private request:HttpClient) { }

  public loginApiParent(body: ApiParents): Observable<ApiUsers>{
    return this.request.post<ApiUsers>(`${API_URLS.DOMAIN}${parents}/${login}`, body);
  }
}
