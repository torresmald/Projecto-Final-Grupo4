import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesTeachersRoutingModule } from './messages-teachers-routing.module';
import { MessagesTeachersComponent } from './messages-teachers.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MessagesTeachersComponent
  ],
  imports: [
    CommonModule,
    MessagesTeachersRoutingModule,
    ReactiveFormsModule
  ]
})
export class MessagesTeachersModule { }
