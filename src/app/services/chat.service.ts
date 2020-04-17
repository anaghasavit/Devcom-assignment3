import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../models/chat-message.model';
import { stringify } from 'querystring';

@Injectable()
export class ChatService {
  user: firebase.User;
  chatMessages: AngularFireList<any>;
  chatMessage: ChatMessage;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
    });
  }
  
  sendMessage(msg: string){
    const email = this.user.email;
    const timestamp = this.getTimeStamp();
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      email: email
     });
  }

  getMessages(): AngularFireList<any> {
    return this.db.list('/messages', ref => {
      return ref.limitToLast(25).orderByKey()
    });
  }

  getTimeStamp() {
    const now = new Date();
    const  date= now.getUTCFullYear()+ '/' +
                 (now.getUTCMonth() + 1) + '/' +
                  now.getUTCDate();
    const time = now.getUTCHours() + ':' +
                 now.getUTCMinutes() + ':' +
                 now.getUTCSeconds();
    var date1=date.toString();
    var time1=time.toString();
    return (date1+' '+ time1);
  }
}


