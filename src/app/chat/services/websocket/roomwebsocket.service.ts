import { Injectable } from '@angular/core';

import { Observable, fromEvent } from 'rxjs';

import {
  IChatRoom,
  IRequestRoom,
  IChatSocketResponse
} from '../chat';

import { AuthService } from 'src/app/user/services';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomwebsocketService {

	instance: WebSocket;
  connected = false;

	wsUrl = `${environment.chatws}/chat/`;

	rooms: IChatRoom[] = [];

  observablemessage: Observable<Event>;

  constructor(
    private auth: AuthService,
  ) { }

  /**
   * [connect description]
   */
  connect(): void {
  	const socket = new WebSocket('ws://localhost:8000/ws/rooms/');
    this.instance = socket;

    socket.onopen = (event) => {
      this.connected = true;
      this.requestRooms();
      console.log('conected function', event);
    };

    socket.onclose = (event) => {
      this.connected = false;
      console.log('disconected function', event);
    };

    this.observablemessage = fromEvent(socket, 'message');

    this.observablemessage.subscribe((val: MessageEvent) => {
      console.log('observable', val)
      console.log('observable', JSON.parse(val.data))
      const data: IChatSocketResponse<IChatRoom[]> = JSON.parse(val.data);
      if (data.method === 'R') {
        this.rooms = data.data;
      }
    });

  }

  /**
   * [isConnected description]
   */
  isConnected(): boolean {
  	if (this.instance === undefined) {
      return false;
    }
    return this.connected;
  }

  /**
   * [requestRooms description]
   */
  requestRooms(): void {
    if (this.isConnected()) {
      const request: IRequestRoom = {
        method: 'R',
        token: this.auth.getAuthorizationToken(),
        values: { name: '-' }
      };
      this.instance.send(
        JSON.stringify(request)
      );
    } else {
      console.warn('socket is not connected');
    }
  }

  getRooms(): IChatRoom[] {
    return this.rooms;
  }

  getObservable(): Observable<Event> {
    return this.observablemessage;
  }

}
