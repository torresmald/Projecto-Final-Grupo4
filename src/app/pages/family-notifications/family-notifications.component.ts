import { Component, OnInit } from '@angular/core';
import { Notifications } from 'src/app/core/models/Notifications/notifications.model';
import { ApiParents } from 'src/app/core/models/Parents/api/api-parents.model';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';
const TOKEN_KEY = 'user-token-key';

@Component({
  selector: 'app-family-notifications',
  templateUrl: './family-notifications.component.html',
  styleUrls: ['./family-notifications.component.scss'],
})
export class FamilyNotificationsComponent implements OnInit {
  public notifications?: Notifications[] = [];
  public token?: ApiParents;
  public tokenChildName?: string;
  public notificationChildName?: string;
  constructor(private messageService: NotificationsService) {
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user) : null;
    this.tokenChildName = this.token?.childs.map((student) => student.name).join('');
    console.log(this.tokenChildName);
  }
  ngOnInit(): void {
    this.messageService
      .getNotification()
      .subscribe((value) => value.map((notification) => notification.student.map((student) => student.name === this.tokenChildName))
      );
  }
}
