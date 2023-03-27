import { ChatService } from './../../core/services/chat/chat.service';
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
  public myCalendar?: Notifications;
  public text : string = '';
  public showChat: boolean = false;


  constructor(private notificationsService: NotificationsService, public chat: ChatService){
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user) : null;
  }
  ngOnInit(): void {
      this.notificationsService.getNotification().subscribe((notification) => {
        
        this.notifications = notification.sort((a: any, b: any) => (b.date > a.date) ? 1 : ((a.date > b.date) ? -1 : 0))
        console.log(this.notifications);
        this.myCalendar = this.notifications[0];
        
      })
  }
  public sendMessage(){
    let messageInfo = {
      text: this.text,
      messageType: 1
    };
    this.chat.sendMessage(messageInfo);
    this.text = '';
  }
  public activateMessages(){
    this.showChat = !this.showChat;
  }
}
