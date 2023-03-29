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
/* Este código importa varios servicios y modelos necesarios para mostrar la vista de la familia . La clase FamilyViewComponent implementa el método OnInit y declara varias propiedades públicas, incluyendo token, notifications, myCalendar, text y showChat.

En el constructor de la clase, se inicializa token leyendo el token almacenado en el almacenamiento local del navegador. El método ngOnInit suscribe al servicio de notificaciones y actualiza las notificaciones de la familia en la vista.

La clase también tiene dos métodos públicos adicionales: sendMessage para enviar mensajes de chat y activateMessages para mostrar u ocultar la sección de chat. */