import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { DjChatHttpOptions, handleError } from 'src/app/http-config';

import { IDjangoUserADD, IDjangoUser } from './interfaces';

@Injectable({
  providedIn: 'root'
})
/**
 *
 */
export class UserService {

  apiURL: string = environment.chatapiurl;
  httpOptions = DjChatHttpOptions;

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * [getUsers description]
   * @return {Observable<IDjangoUser[]>} [description]
   */
  public getUsers(): Observable<IDjangoUser[]> {
    return this.http.get<IDjangoUser[]>(
      '/users/',
      this.httpOptions
    ).pipe(
      catchError(handleError)
    );
  }

  /**
   * [getUser description]
   * @param  {number}                  id [description]
   * @return {Observable<IDjangoUser>}    [description]
   */
  public getUser(id: number): Observable<IDjangoUser> {
    return this.http.get<IDjangoUser>(
      `/user/${id.toString()}/`,
      this.httpOptions
    ).pipe(
      catchError(handleError)
    );
  }

  /**
   * [createUser description]
   * @param  {IDjangoUserADD}          userdata [description]
   * @return {Observable<IDjangoUser>}          [description]
   */
  public createUser(userdata: IDjangoUserADD): Observable<IDjangoUser> {
    return this.http.post<IDjangoUser>(
      '/users/',
      userdata,
      this.httpOptions
    ).pipe(
      catchError(handleError)
    );
  }

  /**
   * [updateUser description]
   * @param  {IDjangoUserADD}          userdata [description]
   * @param  {number}                  id       [description]
   * @return {Observable<IDjangoUser>}          [description]
   */
  public updateUser(userdata: IDjangoUserADD, id: number): Observable<IDjangoUser> {
    return this.http.put<IDjangoUser>(
      `user/${id.toString()}/`,
      userdata,
      this.httpOptions
    ).pipe(
      catchError(handleError)
    );
  }

  /**
   * [deleteUser description]
   * @param  {number}          id [description]
   * @return {Observable<any>}    [description]
   */
  public deleteUser(id: number): Observable<any> {
    return this.http.delete(`user/${id.toString()}/`).pipe(
      catchError(handleError)
    );
  }

}
