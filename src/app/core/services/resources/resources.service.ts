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
}
