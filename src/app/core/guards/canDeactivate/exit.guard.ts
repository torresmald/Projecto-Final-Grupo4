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
      if (!component.loginForm?.dirty) {
        return true;
      } else {
        this.modalService.showModal('NO HAS TERMINADO DE RELLENAR EL FORMULARIO');
      }
      return this.modalService.result$;
  }
  
}
