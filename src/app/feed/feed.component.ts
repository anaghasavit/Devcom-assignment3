import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chat-message.model';
import { AngularFireList} from '@angular/fire/database';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feed: Observable<any>;

  constructor(public chat: ChatService) { }

  ngOnInit() {
    this.feed = this.chat.getMessages().valueChanges();
  
  }

  ngOnChanges(){
    this.feed = this.chat.getMessages().valueChanges();
  }

}
