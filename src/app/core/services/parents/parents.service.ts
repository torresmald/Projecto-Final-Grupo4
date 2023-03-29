import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { ApiParents } from '../../models/Parents/api/api-parents.model';
import { ApiUsers } from '../../models/Users/api/api-users.model';
import { ApiParentsService } from './api/api-parents.service';
const TOKEN_KEY = 'user-token-key';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {
  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor( private parentsService: ApiParentsService) { }

  public loginParent(body: ApiParents): Observable<ApiUsers> {
    return this.parentsService.loginApiParent(body).pipe(
      tap((response: ApiUsers) => {
        const saveStore = JSON.stringify({
          token: response.token,
          user: response.user
        });
        localStorage.setItem(TOKEN_KEY, saveStore);
        this.userLogged$.next(true);
      })
    );
  }

  public getToken() {
    const authToken = localStorage.getItem(TOKEN_KEY);
    return authToken ? JSON.parse(authToken).token : null;
  }
}
/* Este es un servicio llamado ParentsService que proporciona dos métodos:

loginParent: Este método toma un objeto de tipo ApiParents como argumento y devuelve un observable de tipo ApiUsers. Este método utiliza el método loginApiParent del servicio ApiParentsService para realizar la solicitud de inicio de sesión en la API de padres. Después de recibir una respuesta satisfactoria, el método almacena el token de autenticación y el usuario en el almacenamiento local y emite un valor booleano true a través de un ReplaySubject llamado userLogged$.

getToken: Este método devuelve el token de autenticación almacenado en el almacenamiento local */