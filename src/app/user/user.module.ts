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
} from 'src/app/user/views';

import {
  UserProfileComponent,
} from 'src/app/user/components';

@NgModule({
  declarations: [
  	LoginComponent,
    UserProfileComponent
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
    UserProfileComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class UserModule { }
