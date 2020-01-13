import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  WebsocketService,
} from 'src/app/services';

import {
  IChatRoom,
  IChatMessage,
  IRequestRoom
} from '../chat';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatwebsocketService {

  messages: any;
  wsUrl = `${environment.chatws}/chat/`;

  rooms: IChatRoom[];
  listmessages: IChatMessage[];

  constructor(
    private wsService: WebsocketService
  ) {
    // this.messages = this.wsService.connect(this.wsUrl).pipe(
    //   map((response: MessageEvent): any => {
    //     return JSON.parse(response.data);
    //   })
    // );
  }

  /**
   * [getAuthorizationToken description]
   */
  getAuthorizationToken(): string {
    if (localStorage.getItem('token') !== null) {
      return localStorage.getItem('token');
    }
    return '';
  }

}
