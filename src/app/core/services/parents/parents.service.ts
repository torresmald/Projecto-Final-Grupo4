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
