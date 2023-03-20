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
  @Output() public closeNotifications: EventEmitter<boolean> =
    new EventEmitter<boolean>();
    constructor(private notificationService: NotificationsService) {}

  closeNotification(){

  this.closeNotifications.emit(false);

  }

  public deleteNotification(data?: Notifications) {
    if (!data) {
      return;
    }
    // this.notificationService.deleteNotification(data._id).subscribe();
    // this.isPressed = !this.isPressed;
    // this.deleteNotifications.emit(this.isPressed);
    alert("eliminado")
    this.closeNotifications.emit(false);
  }
  

  
}
