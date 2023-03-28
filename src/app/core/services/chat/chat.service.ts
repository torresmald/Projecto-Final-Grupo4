import { Injectable } from '@angular/core';
import { SocketService } from '../socket/socket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public chats?: any =  [];
  constructor(private socket: SocketService) {
    this.receiveMessage();
  }

  public sendMessage(messageInfo: any) {
    if(!this.chats){
      return;
    }
    this.chats.push(messageInfo);
    this.socket.io.emit('sendMessage', messageInfo);
  }

  public receiveMessage() {
    this.socket.io.on('receiveMessage', (messageInfo) => {
      if(!this.chats){
        return;
      }
      messageInfo.messageType = 2;
      this.chats.push(messageInfo);
    });
  }
}

/* 
Este código define un servicio  llamado ChatService que se marca con @Injectable y se proporciona en el inyector raíz.

El servicio tiene una propiedad pública llamada chats que se inicializa como un array vacío.

El constructor del servicio toma una instancia de SocketService como una dependencia inyectada. Cuando se construye el servicio, se llama al método receiveMessage() para escuchar los mensajes entrantes del socket.

El método sendMessage() toma un objeto messageInfo como argumento, que se agrega al array chats y luego se emite al servidor a través del objeto socket.io.

El método receiveMessage() escucha los mensajes entrantes del servidor con el evento 'receiveMessage'. Cuando se recibe un mensaje, se agrega al array chats y se establece la propiedad messageType en 2. Si chats es null o undefined, el mensaje no se agrega al array.
 */