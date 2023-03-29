import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Notifications } from 'src/app/core/models/Notifications/notifications.model';
import { NotificationsService } from './../../../core/services/notifications/notifications.service';

@Component({
  selector: 'app-modal-notification',
  templateUrl: './modal-notification.component.html',
  styleUrls: ['./modal-notification.component.scss']
})
export class ModalNotificationComponent {
  @Input() notification?: Notifications;
  constructor() {}
  
}

/* Este componente define un modal que se utiliza para mostrar una notificación. El componente recibe una notificación como entrada y la muestra en la vista. */