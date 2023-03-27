import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { ModalService } from '../../services/modal/modal.service';

@Injectable({
  providedIn: 'root'  
})
export class ExitGuard implements CanDeactivate<LoginComponent> {
  constructor(private modalService: ModalService){}
  canDeactivate(
    component: LoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | boolean {
      if (!component.loginForm?.dirty || component.isUserLogged) {
        return true;
      } else {
        this.modalService.showModal('NO HAS TERMINADO DE RELLENAR EL FORMULARIO');
      }
      return this.modalService.result$;
  }
  
}
//El código implementa un ExitGuard que implementa la interfaz CanDeactivate para permitir o denegar la salida de una ruta. El guardia toma una instancia de LoginComponent y verifica si el formulario está sucio o si el usuario ha iniciado sesión. Si el formulario está limpio o el usuario ha iniciado sesión, se permite la salida. De lo contrario, se muestra un modal con un mensaje y se devuelve un observable result$ de la instancia de ModalService.//
