import { Component } from '@angular/core';
const TOKEN_KEY = 'user-token-key';
@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.scss']
})
export class TeacherViewComponent {
  public token?;
  constructor(){
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken)) : null;
    console.log(this.token);
  }
}
