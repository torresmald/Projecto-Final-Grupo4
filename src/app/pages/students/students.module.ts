import { TranslateModule } from '@ngx-translate/core';
import { StudentsComponent } from './students.component';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    TranslateModule
  ],
 
})
export class StudentsModule { }


/* Este código es un módulo que importa y declara un componente llamado "StudentsComponent" y configura las dependencias necesarias para su funcionamiento. Las dependencias importadas son CommonModule, StudentsRoutingModule, RouterModule, SharedModule, FormsModule y TranslateModule. Además, se exporta el módulo "StudentsModule".*/
