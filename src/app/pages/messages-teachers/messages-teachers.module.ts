import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesTeachersRoutingModule } from './messages-teachers-routing.module';
import { MessagesTeachersComponent } from './messages-teachers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MessagesTeachersComponent
  ],
  imports: [
    CommonModule,
    MessagesTeachersRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule
  ]
})
export class MessagesTeachersModule { }

/* Este código es un módulo que importa y declara un componente llamado "MessagesTeachersComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son CommonModule, MessagesTeachersRoutingModule, ReactiveFormsModule y TranslateModule. Además, se exporta el módulo "MessagesTeachersModule".*/
