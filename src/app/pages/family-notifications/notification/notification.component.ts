import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Notifications } from 'src/app/core/models/Notifications/notifications.model';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input() notifications?: Notifications;
  // @Output() public deleteNotifications: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public notification: EventEmitter<Notifications> =new EventEmitter<Notifications>();
  @Output() public readedNotification: EventEmitter<Notifications> =new EventEmitter<Notifications>();
  
    ngOnInit(): void {
      this.notificationForm = this.loginBuilder.group({
        readed: new FormControl(this.isReaded),
        student: new FormControl(this.notifications?.student)
      });
    }
  constructor(private notificationService: NotificationsService,private loginBuilder: FormBuilder,
    ) {}
  public infoButton: boolean = false;
  public notificationForm?: FormGroup;
  public isReaded?: boolean = false;

  public deleteNotification(id?: string) {
    if (!id) {
      return;
    }
    this.notificationService.deleteNotification(id).subscribe();
    alert('Borrado')
    // this.deleteNotifications.emit(this.isPressed);
  }


  public editNotification(id?: string) {
    if (!id) {
      return;
    }
    this.isReaded = true;
    this.notificationService.editNotification(id, this.notificationForm?.value).subscribe();
  }
  public moreInfoNotification(notifications?: Notifications) {
    this.notification.emit(notifications);
    
  }

}
