import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiParents } from 'src/app/core/models/Parents/api/api-parents.model';
import { Parents } from 'src/app/core/models/Parents/transformed/parents.model';
import { ApiUsers } from 'src/app/core/models/Users/api/api-users.model';
const parents = 'parents';
const register = 'register'

const login = 'login';
const API_URLS = {
  DOMAIN: 'https://api-projecto-final-grupo4.vercel.app/',
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

  public registerApiParent(body: Parents): Observable<Parents>{
    return this.request.post<Parents>(`${API_URLS.DOMAIN}${parents}/${register}`, body);
  }
}
/* Este es un servicio  con el decorador @Injectable y una dependencia de HttpClient en su constructor.

El servicio tiene dos métodos públicos, loginApiParent() y registerApiParent(), que utilizan el método POST de HttpClient para enviar datos a la API de padres para autenticación y registro, respectivamente.

La URL base de la API se almacena en la constante API_URLS.DOMAIN y se utiliza en la construcción de las URLs de las solicitudes HTTP. Además, la constante API_URLS.PARENTS se utiliza para indicar la ruta de la API para los endpoints de padres.

La clase también tiene una constante parents que se utiliza en el método loginApiParent() para construir la URL de la solicitud HTTP y una constante register que se utiliza en el método registerApiParent() para construir la URL de la solicitud HTTP.

En resumen, este servicio ApiParentsService proporciona una capa de abstracción para interactuar con la API de padres para realizar operaciones de autenticación y registro utilizando el método POST de HttpClient. */