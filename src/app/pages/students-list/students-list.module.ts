import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsListRoutingModule } from './students-list-routing.module';
import { StudentsListComponent } from './students-list.component';
import { StudentComponent } from './student-component/student/student.component';


@NgModule({
  declarations: [
    StudentsListComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentsListRoutingModule
  ],
  exports: [
    StudentsListComponent
  ]
})
export class StudentsListModule { }
