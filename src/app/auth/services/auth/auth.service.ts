import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import { environment } from 'src/environments/environment';
import { DjChatHttpOptions, handleError, notifyError } from 'src/app/http-config';

import { ICredentials, IDJTokenResponse } from './interfaces';


@Injectable({
  providedIn: 'root'
})
/**
 *
 */
export class AuthService {

  token = '';
  apiURL: string = environment.chatapiurl;
  httpOptions = DjChatHttpOptions;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

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
    private toastr: ToastrService,
  ) { }

  /**
   * [login description]
   */
  login(credentials: ICredentials): Observable<IDJTokenResponse> {
    return this.http.post<IDJTokenResponse>(
      `${this.apiURL}/token-auth/`,
      credentials,
      this.httpOptions
    ).pipe(
      catchError(handleError),
      notifyError(this.toastr)
    );
  }

  /**
   * [loginJwtHs description]
   */
  loginJwtHs(credentials: ICredentials): Observable<string> {
    return this.http.post<string>(
      `${this.apiURL}/jwt-auth/`,
      credentials,
      this.httpOptions
    ).pipe(
      catchError(handleError),
      notifyError(this.toastr)
    );
  }

  /**
   * [logout description]
   */
  logout(): Observable<any> {
    return this.http.post<any>(
      `${this.apiURL}/user/logout/`,
      {},
      this.httpOptions
    ).pipe(
      catchError(handleError),
      notifyError(this.toastr)
    );
  }

  /**
   * [setToken description]
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
   * [isLoggedIn description]
   */
  isLoggedIn(): boolean {
    if (localStorage.getItem('token') !== null) {
      return true;
    }
    return false;
  }

  /**
   * [parseJwt description]
   * algorithm = 'HS256'
   */
  parseJwt(token: string): IDJTokenResponse {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }

}
