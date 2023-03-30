import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResources } from 'src/app/core/models/Resources/api/api-resources.model';
import { Resources } from 'src/app/core/models/Resources/transformed/resources.model';
const resources = 'resources';

const API_URLS = {
  DOMAIN: 'https://apicolegiosemilla.up.railway.app/',
  PARENTS: 'resources/',
};
@Injectable({
  providedIn: 'root',
})
export class ApiResourcesService {
  constructor(private request: HttpClient) {}
  public getApiResources(): Observable<ApiResources[]> {
    return this.request.get<ApiResources[]>(`${API_URLS.DOMAIN}${resources}`);
  }
  public createApiResources(body: Resources): Observable<ApiResources> {
    return this.request.post<ApiResources>(
      `${API_URLS.DOMAIN}${resources}`,
      body
    );
  }
  public deleteApiResources(id: string): Observable<ApiResources> {
    return this.request.delete<ApiResources>(
      `${API_URLS.DOMAIN}${resources}/${id}`
    );
  }
}
/* Este código define un servicio llamado ApiResourcesService, el cual tiene métodos para interactuar con una API para obtener, crear y eliminar recursos.

En la constante API_URLS se definen las rutas de la API que serán utilizadas por el servicio. La ruta base se define en DOMAIN, mientras que la ruta específica para los recursos se define en PARENTS.

El constructor del servicio inyecta el servicio HttpClient para realizar solicitudes HTTP.

El método getApiResources realiza una solicitud GET a la ruta de recursos definida en API_URLS y devuelve un observable que emite un arreglo de objetos ApiResources.

El método createApiResources realiza una solicitud POST a la ruta de recursos y recibe un objeto Resources como cuerpo. El método devuelve un observable que emite un objeto ApiResources que representa el recurso recién creado.

El método deleteApiResources realiza una solicitud DELETE a la ruta de recursos con el ID del recurso a eliminar y devuelve un observable que emite el objeto ApiResources que representa el recurso eliminado. */