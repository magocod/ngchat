import { Injectable } from '@angular/core';

import { fromEvent } from 'rxjs';

import {
  IChatMessage,
  IRequestMessage,
  IChatSocketResponse
} from '../chat';

import {
  WebsocketService
} from 'src/app/services';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatwebsocketService extends WebsocketService {

  wsUrl = `${environment.chatws}/chat/`;
  messages: IChatMessage[] = [];

  /**
   * [connect description]
   */
  connect(): void {
    const socket = new WebSocket(this.wsUrl);
    this.instance = socket;

    socket.onopen = (event) => {
      this.requestMessages(1);
      console.log('conected function', event);
    };

    socket.onclose = (event) => {
      console.log('disconected function', event);
    };

    this.observablemessage = fromEvent(socket, 'message');

    this.observablemessage.subscribe((val: MessageEvent) => {
      console.log('observable', val);
      console.log('observable', JSON.parse(val.data));
      const data: IChatSocketResponse<IChatMessage[]> = JSON.parse(val.data);
      if (data.method === 'R') {
        this.messages = data.data;
      }
    });

  }

  /**
   * [requestRooms description]
   */
  requestMessages(roomId: number): void {
    if (this.isConnected()) {
      const request: IRequestMessage = {
        method: 'R',
        token: this.auth.getAuthorizationToken(),
        values: { text: '-', room_id: roomId }
      };
      this.instance.send(
        JSON.stringify(request)
      );
    } else {
      console.warn('socket is not connected');
    }
  }

  /**
   * [getMessages description]
   */
  getMessages(): IChatMessage[] {
    return this.messages;
  }

}
