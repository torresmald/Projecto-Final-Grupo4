import { Component, OnInit } from '@angular/core';
import { ApiParents } from 'src/app/core/models/Parents/api/api-parents.model';
import { ApiTeachers } from 'src/app/core/models/Teachers/api/api-teachers.model';
const TOKEN_KEY = 'user-token-key';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  public token? : ApiTeachers & ApiParents;
  public messageName?: string;
  public messageEmail?: string;

  constructor(){
    
  }
  ngOnInit(): void {
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user) : null;
    this.messageName = `Nombre ${this.token}`;
    this.messageEmail = `Email ${this.token}`;
  }
}
