import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyNotificationsRoutingModule } from './family-notifications-routing.module';
import { FamilyNotificationsComponent } from './family-notifications.component';


@NgModule({
  declarations: [
    FamilyNotificationsComponent
  ],
  imports: [
    CommonModule,
    FamilyNotificationsRoutingModule
  ]
})
export class FamilyNotificationsModule { }
