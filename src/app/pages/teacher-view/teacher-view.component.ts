import { Component } from '@angular/core';
import { ApiTeachers } from 'src/app/core/models/Teachers/api/api-teachers.model';
import { ApiUsers } from 'src/app/core/models/Users/api/api-users.model';
const TOKEN_KEY = 'user-token-key';
@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.scss']
})
export class TeacherViewComponent {
  public token?: ApiTeachers;
  constructor(){
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user) : null;
    console.log(this.token);
  }
}
