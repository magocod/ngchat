import { HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

export const DjChatHttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': environment.chatapiurl,
  })
};

/**
 * [authexclude description]
 * @type {string[]}
 */
export const AuthInterceptorExclude: string[] = [
  `${environment.chatapiurl}/token-auth/`,
  `${environment.chatapiurl}/email/`,
]; 
