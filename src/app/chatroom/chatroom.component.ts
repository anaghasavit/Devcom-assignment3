import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  @ViewChild('scroller') private feedContainer: ElementRef;

  constructor() { }

  ngOnInit() {
  }
}