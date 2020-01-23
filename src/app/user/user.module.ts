import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user.routing.module';

// third party
import { MaterialModule } from 'src/app/material.module';

import {
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
    UserProfileComponent,
    UserBaseComponent,
    UserListComponent,
    UserDetailsComponent,
    UserCreateComponent
  ],
})
export class UserModule { }
