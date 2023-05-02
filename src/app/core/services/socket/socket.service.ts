import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  io = io("https://api-projecto-final-grupo4.up.railway.app", {
    autoConnect: true
  })
  constructor() { 
  }
}
/* Este servicio  se encarga de establecer la conexión con el servidor a través del socket. Se utiliza el método io() de la librería socket.io-client para crear una instancia de socket y se establece la conexión con el servidor en el puerto 4000.*/