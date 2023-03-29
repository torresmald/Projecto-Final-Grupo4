import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ApiResources } from '../../models/Resources/api/api-resources.model';
import { Resources } from '../../models/Resources/transformed/resources.model';
import { LoadingService } from '../loading/loading.service';
import { ApiResourcesService } from './api/api-resources.service';
import { transformDataResources } from './helpers/resources.helper';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private resourcesService: ApiResourcesService, private loadingService:LoadingService) { }

  public getResources(): Observable<Resources[]> {
    this.loadingService.showLoading();
    return this.resourcesService.getApiResources().pipe(
      map((resources: ApiResources[]) => {
        return resources.map((resource: ApiResources) => transformDataResources(resource));
      }),
      tap(() => this.loadingService.hideLoading())
    )
  }
  public createResource(body: Resources): Observable<Resources> {
    return this.resourcesService
      .createApiResources(body)
      .pipe(map((resource) => transformDataResources(resource)));
  }
  public deleteResource(id: string): Observable<Resources> {
    return this.resourcesService
      .deleteApiResources(id)
      .pipe(map((boardGame) => transformDataResources(boardGame)));
  }
}
/* Este código define una clase ResourcesService con tres métodos que se encargan de interactuar con una API para obtener, crear y eliminar recursos.

El método getResources() utiliza el método getApiResources() del servicio ApiResourcesService para obtener un array de recursos en formato ApiResources, que luego es transformado a un array de recursos en formato Resources utilizando la función transformDataResources(). Este método también utiliza un servicio LoadingService para mostrar y ocultar un indicador de carga.

El método createResource() utiliza el método createApiResources() del servicio ApiResourcesService para enviar una solicitud POST con los datos del nuevo recurso. Luego, transforma el objeto de respuesta a formato Resources utilizando la función transformDataResources().

El método deleteResource() utiliza el método deleteApiResources() del servicio ApiResourcesService para enviar una solicitud DELETE con el ID del recurso a eliminar. Luego, transforma el objeto de respuesta a formato Resources utilizando la función transformDataResources(). */