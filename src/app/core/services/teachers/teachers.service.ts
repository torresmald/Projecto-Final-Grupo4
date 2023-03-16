import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { ApiTeachers } from '../../models/Teachers/api/api-teachers.model';
import { ApiUsers } from '../../models/Users/api/api-users.model';
import { ApiTeachersService } from './api/api-teachers.service';
const TOKEN_KEY = 'user-token-key';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(private teachersService: ApiTeachersService) { }

  public loginTeacher(body: ApiTeachers): Observable<ApiUsers> {
    return this.teachersService.loginApiTeacher(body).pipe(
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
}
