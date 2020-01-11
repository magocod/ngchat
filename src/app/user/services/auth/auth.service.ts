import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { DjChatHttpOptions } from 'src/app/http-config';

import { ICredentials, IDJTokenResponse } from './interfaces';


@Injectable({
  providedIn: 'root'
})
/**
 *
 */
export class AuthService {

  token: string = '';
  apiURL: string = environment.chatapiurl;
  httpOptions = DjChatHttpOptions;

  // httpOptions = {
  //    headers: new HttpHeaders({
  //      'Content-Type': 'application/json',
  //      'Access-Control-Allow-Origin': environment.chatapiurl,
  //    })
  //  };

  // djchatheaders = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': environment.chatapiurl,
  //     'Authorization': '',
  //   })
  // };

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * [login description]
   * @param  {ICredentials}                 credentials [description]
   * @return {Observable<IDJTokenResponse>}             [description]
   */
  login(credentials: ICredentials): Observable<IDJTokenResponse> {
    return this.http.post<IDJTokenResponse>(
      `${this.apiURL}/token-auth/`,
      credentials,
      this.httpOptions
    ).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * [logout description]
   * @return {Observable<any>} [description]
   */
  logout(): Observable<any> {
    return this.http.post<any>(
      `${this.apiURL}/user/logout/`,
      {},
      this.httpOptions
    ).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * [setToken description]
   * @param {IDJTokenResponse} payload [description]
   */
  setToken(payload: IDJTokenResponse): void {
    this.token = payload.token;
    localStorage.setItem('token', payload.token);
    localStorage.setItem('user', JSON.stringify(payload.user));
    // this.authorizeheaders.headers = this.authorizeheaders.headers.set(
    //  'Authorization', `Token ${tk.token}`
    // );
  }

  /**
   * [removeToken description]
   */
  removeToken(): void {
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  /**
   * [getAuthorizationToken description]
   * @return {string} [description]
   */
  getAuthorizationToken(): string {
    if (this.token === '') {
      if (localStorage.getItem('token') !== null) {
        return localStorage.getItem('token');
      }
    }
    return this.token;
  }

  /**
   * [handleError description]
   * @param {[type]} error [description]
   */
  handleError(error) {
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

}
