import { Component } from '@angular/core';
import { ApiParents } from 'src/app/core/models/Parents/api/api-parents.model';
import { Students } from 'src/app/core/models/Students/transformed/students.model';
import { ParentsService } from 'src/app/core/services/parents/parents.service';
const TOKEN_KEY = 'user-token-key';
@Component({
  selector: 'app-family-view',
  templateUrl: './family-view.component.html',
  styleUrls: ['./family-view.component.scss']
})
export class FamilyViewComponent {
  public token?: ApiParents;
  
  constructor(){
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user) : null;  
  }
}
