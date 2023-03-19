import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Notifications } from 'src/app/core/models/Notifications/notifications.model';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {
  @Input() notifications?: Notifications;
  @Output() public deleteNotifications: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @Output() public savedNotification: EventEmitter<Notifications> =
    new EventEmitter<Notifications>();
  constructor(private notificationService: NotificationsService) {}
  public isPressed: boolean = false;
  public infoButton: boolean = false;

  public deleteNotification(id?: string) {
    if (!id) {
      return;
    }
    this.notificationService.deleteNotification(id).subscribe();

    this.isPressed = !this.isPressed;
    this.deleteNotifications.emit(this.isPressed);
  }
  public moreInfoNotification(notifications?: Notifications) {
    this.savedNotification.emit(notifications);
  }
  public inButton() {
    this.infoButton = !this.infoButton;
  }

}
