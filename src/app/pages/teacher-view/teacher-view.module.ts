import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import { TeacherViewRoutingModule } from './teacher-view-routing.module';
import { TeacherViewComponent } from './teacher-view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TeacherViewComponent
  ],
  imports: [
    CommonModule,
    TeacherViewRoutingModule,
    FullCalendarModule,
    TranslateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [TeacherViewComponent]
})
export class TeacherViewModule { 
}

/* Este es el archivo que se encuentra en la carpeta de pages, en el cual se encuentra el componente que se muestra en la pantalla de profesor. En este archivo se encuentra el calendario, el cual se importa de la librería de fullcalendar. */