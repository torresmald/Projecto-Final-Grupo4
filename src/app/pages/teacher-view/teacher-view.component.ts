
import { ApiTeachers } from 'src/app/core/models/Teachers/api/api-teachers.model';
import { Component, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import esLocale from '@fullcalendar/core/locales/es';
import { ChatService } from 'src/app/core/services/chat/chat.service';


const TOKEN_KEY = 'user-token-key';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.scss'],
})
export class TeacherViewComponent {
  public token?: ApiTeachers;
  public text : string = '';
  public showChat: boolean = false;
  constructor(private changeDetector: ChangeDetectorRef, public chat: ChatService) {
    const authToken = localStorage.getItem(TOKEN_KEY);
    authToken ? (this.token = JSON.parse(authToken).user) : null;
      // Cargar los eventos guardados en localStorage
  const events = localStorage.getItem('events');
  if (events) {
    this.calendarOptions.initialEvents = JSON.parse(events);
  }
  }
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    locale: esLocale,
    aspectRatio: 2,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
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

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(
        `Estas seguro eliminar evento '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }
  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges();
      // Guardar los eventos en localStorage
  localStorage.setItem('events', JSON.stringify(events));
  }

  public sendMessage(){
    let messageInfo = {
      text: this.text,
      messageType: 1
    };
    this.chat.sendMessage(messageInfo);
    this.text = '';
  }
  public activateMessages(){
    this.showChat = !this.showChat;
  }
}
