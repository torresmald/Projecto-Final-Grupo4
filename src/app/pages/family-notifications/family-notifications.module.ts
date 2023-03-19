import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyNotificationsRoutingModule } from './family-notifications-routing.module';
import { FamilyNotificationsComponent } from './family-notifications.component';
import { NotificationComponent } from './notification/notification.component';


@NgModule({
  declarations: [
    FamilyNotificationsComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    FamilyNotificationsRoutingModule
  ]
})
export class FamilyNotificationsModule { }
