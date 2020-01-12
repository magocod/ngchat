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

/**
 * [handleError description]
 * @param {[type]} error [description]
 */
export function handleError(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  // window.alert(errorMessage);
  console.log(errorMessage);
  return throwError(errorMessage);
}
