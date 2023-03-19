import { Component, Input } from '@angular/core';
import { Notifications } from 'src/app/core/models/Notifications/notifications.model';
import { ModalService } from 'src/app/core/services/modal/modal.service';

@Component({
  selector: 'app-modal-notification',
  templateUrl: './modal-notification.component.html',
  styleUrls: ['./modal-notification.component.scss']
})
export class ModalNotificationComponent {
  @Input() notification?: Notifications;
  constructor(){
  }

  
}
