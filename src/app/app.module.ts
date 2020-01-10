import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// root urls
import { AppRoutingModule } from 'src/app/app-routing.module';

// core app
import { AppComponent } from 'src/app/app.component';

// third party
import { MaterialModule } from 'src/app/material.module';

// local modules
import { CartModule } from 'src/app/shopping-cart/cart.module';
import { ChatModule } from 'src/app/chat/chat.module';

// auth
import { LoginComponent } from './auth/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    // auth
    LoginComponent,
  ],
  imports: [
    // core angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // third party
    MaterialModule,
    // local modules
    AppRoutingModule,
    CartModule,
    ChatModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
