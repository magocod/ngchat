import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import { environment } from 'src/environments/environment';
import { DjChatHttpOptions, handleError, notifyError } from 'src/app/http-config';

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
    private toastr: ToastrService,
  ) { }

  /**
   * [getUsers description]
   * @return {Observable<IDjangoUser[]>} [description]
   */
  public getUsers(): Observable<IDjangoUser[]> {
    return this.http.get<IDjangoUser[]>(
      `${this.apiURL}/users/`,
      this.httpOptions
    ).pipe(
      catchError(handleError),
      notifyError(this.toastr)
    );
  }

  /**
   * [getUser description]
   * @param  {number}                  id [description]
   * @return {Observable<IDjangoUser>}    [description]
   */
  public getUser(id: number): Observable<IDjangoUser> {
    return this.http.get<IDjangoUser>(
      `${this.apiURL}/user/${id.toString()}/`,
      this.httpOptions
    ).pipe(
      catchError(handleError),
      notifyError(this.toastr)
    );
  }

  /**
   * [createUser description]
   * @param  {IDjangoUserADD}          userdata [description]
   * @return {Observable<IDjangoUser>}          [description]
   */
  public createUser(userdata: IDjangoUserADD): Observable<IDjangoUser> {
    return this.http.post<IDjangoUser>(
      `${this.apiURL}/users/`,
      userdata,
      this.httpOptions
    ).pipe(
      catchError(handleError),
      notifyError(this.toastr)
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
      `${this.apiURL}/user/${id.toString()}/`,
      userdata,
      this.httpOptions
    ).pipe(
      catchError(handleError),
      notifyError(this.toastr)
    );
  }

  /**
   * [deleteUser description]
   * @param  {number}          id [description]
   * @return {Observable<any>}    [description]
   */
  public deleteUser(id: number): Observable<any> {
    return this.http.delete(
      `${this.apiURL}/user/${id.toString()}/`
    ).pipe(
      catchError(handleError),
      notifyError(this.toastr)
    );
  }

}
