

import { ApiTeachers } from 'src/app/core/models/Teachers/api/api-teachers.model';
import { Component, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, Calendar,} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import esLocale from '@fullcalendar/core/locales/es';
import iCalendarPlugin from '@fullcalendar/icalendar';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

 

    


const TOKEN_KEY = 'user-token-key';
const EVENTS_KEY = 'events';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.scss'],
})
export class TeacherViewComponent {
  public token?: ApiTeachers;
  constructor(private changeDetector: ChangeDetectorRef) {
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user) : null;
  
  
  const eventsJson = localStorage.getItem(EVENTS_KEY);
  if (eventsJson) {
    const events = JSON.parse(eventsJson);
    this.calendarOptions.events = events;
  }
}

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin,iCalendarPlugin,googleCalendarPlugin],
    locale: esLocale,
    aspectRatio: 2,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek, iCalendarPlugin',
      
    },
   

    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, 
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    googleCalendarApiKey: 'AIzaSyBWfBZfBxSCJxlyDUMfr5-RUQr7O68Zf1k',
    events: [
      { 
          googleCalendarId: '1067325408993-opda1p9fgfua22a00ei74do2rn5is6hj.apps.googleusercontent.com',
          textColor: 'white',
          borderColor: '#4caf50'
        }
      ]
    };
    
    
    
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Porfavor ingrese el nombre del evento');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); 

    if (title) {
     const newEvent =({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        url: 'https://calendar.google.com/calendar/u/0/r/',
      });
      calendarApi.addEvent(newEvent);

    const eventsJson = localStorage.getItem(EVENTS_KEY);
    const events = eventsJson ? JSON.parse(eventsJson) : [];
    localStorage.setItem(EVENTS_KEY, JSON.stringify([...events, newEvent]));
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (clickInfo.event.url) {
      window.open(clickInfo.event.url, '_blank');
    } else if (
      confirm(`Estas seguro eliminar evento '${clickInfo.event.title}'`)
    ) {
      clickInfo.event.remove();
    }
  }
  
  
  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
  }
 

  


};