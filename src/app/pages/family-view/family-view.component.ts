import { Component, OnInit } from '@angular/core';
import { Notifications } from 'src/app/core/models/Notifications/notifications.model';
import { ApiParents } from 'src/app/core/models/Parents/api/api-parents.model';
import { Students } from 'src/app/core/models/Students/transformed/students.model';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';
import { ParentsService } from 'src/app/core/services/parents/parents.service';

const TOKEN_KEY = 'user-token-key';

@Component({
  selector: 'app-family-view',
  templateUrl: './family-view.component.html',
  styleUrls: ['./family-view.component.scss']
})

export class FamilyViewComponent implements OnInit{
  public token?: ApiParents;
  public notifications?: Notifications[];
  constructor(private notificationsService: NotificationsService){
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user) : null;  
  }
  ngOnInit(): void {
      this.notificationsService.getNotification().subscribe((notification) => this.notifications = notification)
  }
}
