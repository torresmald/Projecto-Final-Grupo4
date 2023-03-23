
import { EventInput, Calendar } from '@fullcalendar/core';


let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, '');



export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Ir a la universidad',
    start: TODAY_STR,
    display: 'background',
  },
  {
    id: createEventId(),
    title: 'Comedor',
    start: TODAY_STR + 'T00:00:00',
    end: TODAY_STR + 'T03:00:00',

      
  },
  {
    id: createEventId(),
    title: 'Reunión',
    start: TODAY_STR + 'T12:00:00',
    end: TODAY_STR + 'T15:00:00',
  },
  {
    title: 'Conferencia sobre la vida',
    start: '2023-03-11',
    end: '2023-03-13',
    color: '',
    textColor: 'black',
  },
  {
    title: 'Reconocimiento medico',
    start: '2023-03-25',
    end: '2023-03-27',
    color: 'red',
    textColor: 'black',
  },

 

  {
    title: 'Click for Google-calendar',
    url: 'https://calendar.google.com/calendar/u/0/r/',
    start: '2023-04-01',
    end: '2023-04-02',
    color: 'red',


  }
];



export function createEventId() {
  return String(eventGuid++);




}