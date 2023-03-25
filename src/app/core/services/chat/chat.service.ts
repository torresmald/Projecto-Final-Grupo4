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
    console.log(messageInfo);

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
