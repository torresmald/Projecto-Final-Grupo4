import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDetailRoutingModule } from './student-detail-routing.module';
import { StudentDetailComponent } from './student-detail.component';


@NgModule({
  declarations: [
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    StudentDetailRoutingModule,
    TranslateModule
  ]
})
export class StudentDetailModule { }

/* Este código es un módulo que importa y declara un componente llamado "StudentDetailComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son CommonModule, StudentDetailRoutingModule y TranslateModule. Además, se exporta el módulo "StudentDetailModule".*/