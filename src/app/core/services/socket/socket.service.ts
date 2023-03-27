import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  io = io("https://api-projecto-final-grupo4.vercel.app/", {
    autoConnect: true,
    withCredentials: true
  })
  constructor() { 
  }
}
