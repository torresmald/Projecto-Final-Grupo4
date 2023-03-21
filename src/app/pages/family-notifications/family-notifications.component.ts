import { Component, Input, OnInit } from '@angular/core';
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
  public showNotification: boolean = false;
  public notifications?: Notifications[] = [];
  public token?: Students[];
  public tokenChildName?: string;
  public savedNotification?: Notifications;
  public readedNotification?: Notifications;

  constructor(private messageService: NotificationsService) {
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user.childs) : null;
    this.tokenChildName = this.token?.map((name) => name.name).join('');
    this.messageService
    .getNotification()
    .subscribe(
      (value) =>
        this.notifications = value.filter((obj) => obj.student.some((student) => (student.name === this.tokenChildName) || student.name === 'Todos'))
    );
  }


  public editNotification(event: Notifications){
    this.readedNotification = event;
  }
  public openNotification(){
    this.openNoti = !this.openNoti
  }
  public moreInfoNotification(event: Notifications, isTouched: Notifications ){
    this.savedNotification = event;
    this.showNotification = isTouched ? true : false;
  } 

  public closeNotifications(event: boolean){

    this.showNotification = event

  }
}
