import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// root urls
import { AppRoutingModule } from 'src/app/app-routing.module';

// core app
import { AppComponent } from 'src/app/app.component';

// local modules
import { CartModule } from 'src/app/shopping-cart/cart.module';
import { ChatModule } from 'src/app/chat/chat.module';

// auth
import { LoginComponent } from './auth/login/login.component';

// angular material
import {
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatExpansionModule,
  MatTabsModule
} from '@angular/material';

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
    // material
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTabsModule,
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
