import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherViewRoutingModule } from './teacher-view-routing.module';
import { TeacherViewComponent } from './teacher-view.component';


@NgModule({
  declarations: [
    TeacherViewComponent
  ],
  imports: [
    CommonModule,
    TeacherViewRoutingModule
  ]
})
export class TeacherViewModule { }
