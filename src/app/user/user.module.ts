import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user.routing.module';

// third party
import { MaterialModule } from 'src/app/material.module';

import {
	LoginComponent,
} from 'src/app/user/views';

@NgModule({
  declarations: [
  	LoginComponent,
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
  	LoginComponent
  ]
})
export class UserModule { }
