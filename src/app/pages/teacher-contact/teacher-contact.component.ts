import { Component } from '@angular/core';
import { ChatService } from 'src/app/core/services/chat/chat.service';

@Component({
  selector: 'app-teacher-contact',
  templateUrl: './teacher-contact.component.html',
  styleUrls: ['./teacher-contact.component.scss']
})
export class TeacherContactComponent {
  public text : string = '';
  constructor(public chat: ChatService){}

  public sendMessage(){
    let messageInfo = {
      text: this.text,
      messageType: 1
    };
    this.chat.sendMessage(messageInfo);
    this.text = '';
  }
}
