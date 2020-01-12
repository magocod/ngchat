/**
 * Chat websockets response
 */

import { IChatRoom, IChatMessage } from './interfaces';
import { TypeChatMethods } from './utils';

/**
 *
 */
export interface IChatSocketResponse {
	method: TypeChatMethods;
}

/**
 *
 */
export interface ISuccessResponse<T> extends IChatSocketResponse {
  data: T;
}

/**
 * 
 */
export interface ISocketExceptionResponse {
	exception: string; 
}

/**
 *
 */
export interface ISocketErrorResponse {
	errors: any[] | ISocketExceptionResponse;
}

/**
 *
 */
export interface IJoinRoomResponse {
	join: number;
	name: string;
}

/**
 *
 */
export interface IMessageGroupResponse {
	room: number;
  username: string;
}

/**
 *
 */
export interface ILeaveRoomResponse {
	leave: number;
}
