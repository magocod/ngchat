/**
 * Dj Chat
 */

import { TypeRoomMethods, TypeMessageMethods } from './utils';

/**
 *
 */
export interface IChatRoom {
  name: string;
  updated: string;
  timestamp: string;
}

/**
 *
 */
export interface IChatRoomCreate {
  name: string;
}

/**
 *
 */
export interface IChatMessage {
  text: string;
  updated: string;
  timestamp: string;
  room_id: number;
}

/**
 *
 */
export interface IChatMessageCreate {
  text: string;
  room_id: number;
}

/**
 *
 */
export interface IRequestChat {
  token: string;
}

/**
 *
 */
export interface IRequestRoom extends IRequestChat {
  method: TypeRoomMethods;
  values: IChatRoomCreate;
}

/**
 *
 */
export interface IRequestMessage extends IRequestChat {
  method: TypeMessageMethods;
  values: IChatMessageCreate;
}
