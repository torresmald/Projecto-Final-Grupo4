import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public shouldShowLoading$: ReplaySubject<boolean> =  new ReplaySubject<boolean>();

  constructor() {
    this.shouldShowLoading$.next(false);
  }

  public showLoading() {
    this.shouldShowLoading$.next(true);
  }

  public hideLoading() {
    this.shouldShowLoading$.next(false);
  }
}
/*Este es un servicio de  con el decorador @Injectable y una propiedad observable llamada shouldShowLoading$ que almacena valores booleanos usando ReplaySubject. También tiene dos métodos públicos, showLoading() y hideLoading(), que establecen el valor de la propiedad shouldShowLoading$ en true o false respectivamente. Estos métodos pueden ser utilizados para mostrar u ocultar un indicador de carga en la aplicación.*/