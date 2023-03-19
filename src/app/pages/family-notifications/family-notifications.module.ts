import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyNotificationsRoutingModule } from './family-notifications-routing.module';
import { FamilyNotificationsComponent } from './family-notifications.component';
import { NotificationComponent } from './notification/notification.component';
import { ModalNotificationComponent } from './modal-notification/modal-notification.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FamilyNotificationsComponent,
    NotificationComponent,
    ModalNotificationComponent
  ],
  imports: [
    CommonModule,
    FamilyNotificationsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FamilyNotificationsModule { }
