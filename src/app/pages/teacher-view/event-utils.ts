import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'Ir a la universidad',
    start: TODAY_STR,
    display: 'background'
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
    end: TODAY_STR + 'T15:00:00'
  },
  { id: createEventId(),
     title: 'Claustro', 
     start: '2023-03-08', 
     end: '2023-03-10',
     color: 'red',
     allDay: true,
    },
  { id: createEventId(),
      title: 'Reunión de padres',
      start: '2023-03-20',
      end: '2023-03-22',
      color: 'green',
      allDay: true,
    },
  { id: createEventId(),
      title: 'Excursion escolar',
      start: '2023-03-28',
      end: '2023-03-28',
      color: 'orange',
      allDay: true,
    },
];

export function createEventId() {
  return String(eventGuid++);
}

/* El código define una constante llamada INITIAL_EVENTS que contiene un arreglo de eventos que se mostrarán en el calendario. Cada evento tiene un id, un título, una fecha de inicio y una fecha de finalización. El código también define una función llamada createEventId que se encarga de crear un id para cada evento.*/