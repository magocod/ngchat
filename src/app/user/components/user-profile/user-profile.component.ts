import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/auth';
import { IDjangoUser } from 'src/app/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  loading = false;

  username = 'Username';
  email = 'Email';

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    try {
      if (localStorage.getItem('user') !== null) {
        const user: IDjangoUser = JSON.parse(`${localStorage.getItem('user')}`);
        this.username = user.username;
        this.email = user.email;
      }
    } catch (error) {
      console.log(error);
    }
  }

  logout(): void {
    // this.auth.logout().subscribe((value) => {
    //   console.log(value);
    //   this.auth.removeToken();
    //   this.toastr.success('...', 'Closing session');
    //   this.router.navigateByUrl('/');
    // });
    const $loading = this.auth.logout().pipe(
      catchError((err) => {
        return of(err);
      }),
      finalize(() => {
        this.loading = false;
      })
    );
    $loading.subscribe((value) => {
      if (typeof value !== 'string') {
        console.log(value);
        this.auth.removeToken();
        this.toastr.success('...', 'Closing session');
        this.router.navigateByUrl('/');
      } else {
        console.log('error', value);
      }
    });
  }

}
