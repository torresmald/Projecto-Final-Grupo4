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
  @Output() public notification: EventEmitter<Notifications> =new EventEmitter<Notifications>();
  @Output() public readedNotification: EventEmitter<Notifications> =new EventEmitter<Notifications>();
  @Output() public deleteModal: EventEmitter<boolean> =new EventEmitter<boolean>();
  
    ngOnInit(): void {
      this.notificationForm = this.loginBuilder.group({
        readed: new FormControl(true),
        student: new FormControl(this.notifications?.student)
      });
    }
  constructor(private notificationService: NotificationsService,private loginBuilder: FormBuilder,
    ) {}
  public notificationForm?: FormGroup;
  public isReaded: boolean = false
  public isDelete: boolean = false



  public deleteNotification(id?: string) {
    if (!id) {
      return;
    }
    this.notificationService.deleteNotification(id).subscribe();
    alert('Borrado')

    this.isDelete = !this.isDelete;
    this.deleteModal.emit(false);

  }


  public editNotification(id?: string) {
    if (!id) {
      return;
    }
    this.notificationService.editNotification(id, this.notificationForm?.value).subscribe();
    this.isReaded = true;
    console.log(this.notifications)
    
  }
  
  public moreInfoNotification(notifications?: Notifications) {
    this.notification.emit(notifications);
  

    
  }

}
