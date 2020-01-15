import { fromEvent } from 'rxjs';

/**
 * [exampleSocket description]
 */
export function exampleSocket() {
  const authtoken = '20fd382ed9407b31e1d5f928b5574bb4bffe6120';
  const socket = new WebSocket('ws://localhost:8000/ws/rooms/');

  // Connection opened
  socket.onopen = (event) => {
    console.log('conected', event);
    _RequestSocket(socket, authtoken);
    _RequestSocket(socket, authtoken);
  };

  socket.onmessage = (event) => {
    console.log('socket function', event);
    console.log('socket function', JSON.parse(event.data));
  };

  const observablemessage = fromEvent(socket, 'message');

  observablemessage.subscribe((val: MessageEvent) => {
    console.log('observable', val);
    console.log('observable', JSON.parse(val.data));
  });

  socket.onclose = (event) => {
    console.log('disconected', event);
  };

}

/**
 * [_RequestSocket description]
 */
function _RequestSocket(instance: WebSocket, authtoken: string) {
  instance.send(
    JSON.stringify({
      method: 'R',
      token: authtoken,
      values: {}
    })
  );
}
