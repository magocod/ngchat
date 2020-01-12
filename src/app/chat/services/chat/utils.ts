/**
 * Chat methods
 */

/**
 *
 */
export enum RoomMethods {
  UPSERT = 'U',
  DELETE = 'D',
  READ = 'R',
}

/**
 * [TypeRoomMethods description]
 * @type {String}
 */
export type TypeRoomMethods = 'U' | 'D' | 'R';

/**
 *
 */
export enum MessageMethods {
  CREATE = 'C',
  DELETE = 'D',
  READ = 'R',
  EXIT = 'E', // room
  JOIN = 'J', // room
}

/**
 * [TypeMessageMethods description]
 * @type {String}
 */
export type TypeMessageGroupMethods = 'E' | 'J';

/**
 * [TypeMessageMethods description]
 * @type {String}
 */
export type TypeMessageBasicMethods = 'C' | 'D' | 'R';

/**
 * [TypeMessageMethods description]
 * @type {[type]}
 */
export type TypeMessageMethods = TypeMessageGroupMethods & TypeMessageBasicMethods;

/**
 * [TypeChatMethods description]
 * @type {[type]}
 */
export type TypeChatMethods = TypeRoomMethods | TypeMessageMethods;
