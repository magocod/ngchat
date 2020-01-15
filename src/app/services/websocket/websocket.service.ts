import { Injectable } from '@angular/core';

import { Observable, fromEvent } from 'rxjs';

import {
  SocketStates
} from './utils';

import { AuthService } from 'src/app/user/services';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  instance: WebSocket;
  wsUrl: string;

  observablemessage: Observable<Event>;

  constructor(
    public auth: AuthService,
  ) {

  }

  /**
   * [close description]
   */
  close(): void {
    this.instance.close();
  }

  /**
   * [isConnected description]
   */
  isConnected(): boolean {
    if (this.instance === undefined) {
      return false;
    }
    if (this.instance.readyState === SocketStates.OPEN) {
      return true;
    }
    return false;
  }

  /**
   * [getObservable description]
   */
  getObservable(): Observable<Event> {
    return this.observablemessage;
  }

}

// @Injectable({
//   providedIn: 'root'
// })
// export class WebsocketService {

//   public subject: Subject<MessageEvent>;

//   /**
//    * [create description]
//    */
//   public create(url): Subject<MessageEvent> {

//     const ws: WebSocket = new WebSocket(url);

//     const observable: Observable<any> = Observable.create((obs: Observer<MessageEvent>) => {
//       ws.onmessage = obs.next.bind(obs);
//       ws.onerror = obs.error.bind(obs);
//       ws.onclose = obs.complete.bind(obs);
//       return ws.close.bind(ws);
//     });

//     const observer = {
//       next: (data: any) => {
//         if (ws.readyState === WebSocket.OPEN) {
//           ws.send(JSON.stringify(data));
//         }
//       }
//     };

//     return Subject.create(observer, observable);
//   }

//   /**
//    * [connect description]
//    */
//   public connect(url: string): Subject<MessageEvent> {
//     if (!this.subject) {
//       this.subject = this.create(url);
//       console.log('Successfully connected: ' + url);
//     }
//     return this.subject;
//   }

// }
