/**
 * Django auth
 */

import { IDjangoUser } from 'src/app/user';

/**
 *
 */
export interface ICredentials {
  email: string;
  password: string;
}

/**
 *
 */
export interface IDJTokenResponse {
  token: string;
  user: IDjangoUser;
}

/**
 * Requerido en todo mensaje enviado por websocket
 */
export interface IWsAuth {
  token: string;
}
