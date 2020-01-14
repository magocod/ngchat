import { Component, OnInit } from '@angular/core';

import {
  ChatwebsocketService,
  RoomwebsocketService,
  IChatRoom,
  IChatSocketResponse,
} from 'src/app/chat/services';

@Component({
  selector: 'app-chat-dashboard',
  templateUrl: './chat-dashboard.component.html',
  styleUrls: ['./chat-dashboard.component.css']
})
export class ChatDashboardComponent implements OnInit {

  // rooms: IChatRoom[] = [];
  roomdisplayedColumns: string[] = ['id', 'name', 'updated', 'action'];

  constructor(
    private chatwebsocketservice: ChatwebsocketService,
    private roomwebsocketservice: RoomwebsocketService
  ) {

  }

  ngOnInit() {
    // this.rooms = this.roomwebsocketservice.rooms;
  }

  requestRooms() {
    this.roomwebsocketservice.requestRooms();
  }

  get rooms() {
    // console.log(this.roomwebsocketservice.getRooms());
    return this.roomwebsocketservice.getRooms(); 
  }

}
