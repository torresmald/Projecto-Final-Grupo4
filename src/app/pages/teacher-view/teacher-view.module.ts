import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';

import { TeacherViewRoutingModule } from './teacher-view-routing.module';
import { TeacherViewComponent } from './teacher-view.component';



@NgModule({
  declarations: [
    TeacherViewComponent
  ],
  imports: [
    CommonModule,
    TeacherViewRoutingModule,
    FullCalendarModule 
  ]
})
export class TeacherViewModule { 
}

