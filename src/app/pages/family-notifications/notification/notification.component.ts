import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Notifications } from 'src/app/core/models/Notifications/notifications.model';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  @Input() notifications?: Notifications;
  @Output() public hideNotifications: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isPressed:boolean = false;

  public hideNotification(){
    this.isPressed = !this.isPressed;
    this.hideNotifications.emit(this.isPressed);
  }
}
