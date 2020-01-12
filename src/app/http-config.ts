import { HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable, OperatorFunction, Subscriber } from 'rxjs';

import { throwError } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

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
  console.log('handleerror:', errorMessage);
  return throwError(errorMessage);
}

/**
 * [notifyError description]
 * @param {ToastrService} instanceservice [description]
 */
export function notifyError(instanceservice: ToastrService): OperatorFunction<any, any> {
  return (observable) => new Observable((observer: Subscriber<any>) => {
    // this function will called each time this
    // Observable is subscribed to.
    const subscription = observable.subscribe({
      next(value) {
        observer.next(value);
      },
      error(err) {
        console.log('notifyerror:', err);
        instanceservice.error('operatorFunction', `${err} Error`)
        observer.error(err);
      },
      complete() {
        observer.complete();
      }
    });
    // the return value is the teardown function,
    // which will be invoked when the new
    // Observable is unsubscribed from.
    return () => {
      subscription.unsubscribe();
    }
  });
}
