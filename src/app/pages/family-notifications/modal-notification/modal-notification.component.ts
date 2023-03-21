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
  @Output() public deleteNotifications: EventEmitter<boolean> =
  new EventEmitter<boolean>();
  @Output() public deleteNotificationList: EventEmitter<boolean> =
  new EventEmitter<boolean>();
  constructor(private notificationService: NotificationsService) {}
  

  public deleteNotification(data?: Notifications) {
    if (!data) {
      return;
    }
    // this.notificationService.deleteNotification(data._id).subscribe();
    alert("eliminado")
    this.deleteNotifications.emit(false);
  }



}
