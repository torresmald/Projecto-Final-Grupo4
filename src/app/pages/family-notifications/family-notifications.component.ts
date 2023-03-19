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
export class FamilyNotificationsComponent  {
  public openNoti: boolean = false;
  public showNotifitacion: boolean = true;
  public notifications?: Notifications[] = [];
  public token?: Students[];
  public tokenChildName?: string;
  
  constructor(private messageService: NotificationsService) {
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user.childs) : null;
    this.tokenChildName = this.token?.map((name) => name.name).join('');
    this.messageService
    .getNotification()
    .subscribe(
      (value) =>
        this.notifications = value.filter((obj) => obj.student.some((student) => student.name === this.tokenChildName))
    );
  }
  public hideNotification(isTouched: any) {
    this.showNotifitacion = isTouched ? true : false;
  }
  public openNotification(){
    this.openNoti = !this.openNoti
  } 
}
