import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserRoutingModule } from './user.routing.module';
import { AuthInterceptor } from './services';

// third party
import { MaterialModule } from 'src/app/material.module';

import {
	LoginComponent,
  UserBaseComponent,
  UserListComponent,
  UserDetailsComponent,
  UserCreateComponent
} from 'src/app/user/views';

import {
  UserProfileComponent,
} from 'src/app/user/components';

@NgModule({
  declarations: [
  	LoginComponent,
    UserProfileComponent,
    UserBaseComponent,
    UserListComponent,
    UserDetailsComponent,
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserRoutingModule,
    // third party
    MaterialModule
  ],
  exports: [
  	LoginComponent,
    UserProfileComponent,
    UserBaseComponent,
    UserListComponent,
    UserDetailsComponent,
    UserCreateComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class UserModule { }
