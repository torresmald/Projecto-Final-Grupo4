import { Component, OnInit } from '@angular/core';
import { Notifications } from 'src/app/core/models/Notifications/notifications.model';
import { ApiParents } from 'src/app/core/models/Parents/api/api-parents.model';
import { Students } from 'src/app/core/models/Students/transformed/students.model';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';
const TOKEN_KEY = 'user-token-key';

@Component({
  selector: 'app-family-notifications',
  templateUrl: './family-notifications.component.html',
  styleUrls: ['./family-notifications.component.scss'],
})
export class FamilyNotificationsComponent implements OnInit {
  public notifications?: Notifications[] = [];
  public token?: Students[];
  public tokenChildName?: string;
  public myChild?: Notifications[];
  constructor(private messageService: NotificationsService) {
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user.childs) : null;
    this.tokenChildName = this.token?.map((name) => name.name).join('');
    console.log(this.tokenChildName);
  }
  ngOnInit(): void {
    this.messageService
      .getNotification()
      .subscribe(
        (value) =>
          (this.notifications = value.filter(
            (student) => student.name === this.tokenChildName
          ))
      );
    console.log(this.notifications);
  }
}
