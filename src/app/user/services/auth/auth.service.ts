import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	token: string = '';
	apiURL: string = environment.chatapiurl;

	httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': environment.chatapiurl,
    })
  };

  authorizeheaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': environment.chatapiurl,
      'Authorization': '',
    })
  };

  constructor(
  	private http: HttpClient,
  ) { }

  login(): void {
  	const credentials = {
  		email: 'magoyeison@gmail.com',
  		password: '123',
  	};
    this.http.post<any>(`${this.apiURL}token-auth/`, credentials, this.httpOptions)
    .pipe(
      catchError(this.handleError)
    ).subscribe((value) => {
      console.log(value);
      // this.setToken(value);
    })
  }

  // setToken(tk: any): void {
  //   this.token = tk.token;
  //   this.authorizeheaders.headers = this.authorizeheaders.headers.set(
  //   	'Authorization', `Token ${tk.token}`
  //   );
  // }

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
