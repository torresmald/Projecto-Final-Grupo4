import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  io = io("http://localhost:3000/", {
    withCredentials: true,
    autoConnect: true
  })
  constructor() { 
    this.io.emit('test', {text: 'HOLA MUNDO'});
    
    this.io.on('test2', () => {
      alert('Test2')      
    })
  }
}
