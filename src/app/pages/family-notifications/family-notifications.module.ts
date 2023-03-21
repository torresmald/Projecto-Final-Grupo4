import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FamilyNotificationsRoutingModule } from './family-notifications-routing.module';
import { FamilyNotificationsComponent } from './family-notifications.component';
import { NotificationComponent } from './notification/notification.component';
import { ModalNotificationComponent } from './modal-notification/modal-notification.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FamilyNotificationsComponent,
    NotificationComponent,
    ModalNotificationComponent
  ],
  imports: [
    CommonModule,
    FamilyNotificationsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatPaginatorModule
    
  ]
})
export class FamilyNotificationsModule { }
