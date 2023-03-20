import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResources } from 'src/app/core/models/Resources/api/api-resources.model';
const resources = 'resources';

const API_URLS = {
  DOMAIN: 'https://api-projecto-final-grupo4.vercel.app/',
  PARENTS: 'resources/'
}
@Injectable({
  providedIn: 'root'
})
export class ApiResourcesService {

  constructor(private request:HttpClient) { }
  public getApiResources(): Observable<ApiResources[]>{
    return this.request.get<ApiResources[]>(`${API_URLS.DOMAIN}${resources}`);
  }
}
