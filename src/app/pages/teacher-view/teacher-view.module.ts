import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import { TeacherViewRoutingModule } from './teacher-view-routing.module';
import { TeacherViewComponent } from './teacher-view.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    TeacherViewComponent
  ],
  imports: [
    CommonModule,
    TeacherViewRoutingModule,
    FullCalendarModule,
    TranslateModule
  ],
  providers: [],
  bootstrap: [TeacherViewComponent]
})
export class TeacherViewModule { 
}

