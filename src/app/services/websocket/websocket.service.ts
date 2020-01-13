import { Injectable } from '@angular/core';

import {
  Subject,
  Observer,
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public subject: Subject<MessageEvent>;

  /**
   * [create description]
   */
  public create(url): Subject<MessageEvent> {

    const ws: WebSocket = new WebSocket(url);

    const observable: Observable<any> = Observable.create((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });

    const observer = {
      next: (data: any) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };

    return Subject.create(observer, observable);
  }

  /**
   * [connect description]
   */
  public connect(url: string): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }

}
