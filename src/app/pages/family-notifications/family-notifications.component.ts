import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Notifications } from 'src/app/core/models/Notifications/notifications.model';
import { Students } from 'src/app/core/models/Students/transformed/students.model';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';

const TOKEN_KEY = 'user-token-key';

@Component({
  selector: 'app-family-notifications',
  templateUrl: './family-notifications.component.html',
  styleUrls: ['./family-notifications.component.scss'],
})
export class FamilyNotificationsComponent {
  public showNotification: boolean = false;
  public notifications: Notifications[] = [];
  public token?: Students[];
  public tokenChildName?: string;
  public savedNotification?: Notifications;
  public readedNotification?: Notifications;
  public page_size: number = 10;
  public page_number: number = 1;
  public notificationReaded?: Notifications[];
  hidePageSize = true;
 

  constructor(
    private messageService: NotificationsService
  ) {
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user.childs) : null;
    this.tokenChildName = this.token?.map((name) => name.name).join('');

    this.messageService
      .getNotification()
      .subscribe(
        (value) =>
          (this.notifications = value
            .filter((obj) =>
              obj.student.some(
                (student) =>
                  student.name === this.tokenChildName ||
                  student.name === 'Todos'
              )
            )
            .reverse())
      );
  }

  public editNotification(event: Notifications) {
    this.readedNotification = event;
  }

  public moreInfoNotification(event: Notifications) {
    this.savedNotification = event;
    event ? (this.showNotification = true) : null;
  }

  public deleteNotifications(event: boolean) {
    this.showNotification = event;
  }

  handlePageEvent(ev: PageEvent) {
    this.page_size = ev.pageSize;
    this.page_number = ev.pageIndex + 1;
  }
}
/* muestra las notificaciones de la familia. Utiliza el módulo de paginación de Angular para mostrar las notificaciones de forma paginada. También utiliza los servicios de notificaciones para obtener las notificaciones y mostrarlas en la página. El código tiene variables públicas para almacenar las notificaciones, el token del estudiante, el tamaño y número de página, entre otros. También hay métodos públicos para editar la notificación, obtener más información de la notificación y eliminar las notificaciones.*/
