import { Component } from '@angular/core';
import { ChatService } from 'src/app/core/services/chat/chat.service';

@Component({
  selector: 'app-family-contact',
  templateUrl: './family-contact.component.html',
  styleUrls: ['./family-contact.component.scss']
})
export class FamilyContactComponent {
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
