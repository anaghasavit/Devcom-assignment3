import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AuthService } from '../services/auth.service';
import { ChatMessage } from '../models/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userEmail: string;
  messageContents: string;
  timeStamp: string;

  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContents = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
  }

}
