import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CartModule } from 'src/app/shopping-cart/cart.module';

// root urls
import { AppRoutingModule } from 'src/app/app-routing.module';

// core app
import { AppComponent } from 'src/app/app.component';

import { ChatDashboardComponent } from './chat/chat-dashboard/chat-dashboard.component';
import { ChatLayoutComponent } from './chat/chat-layout/chat-layout.component';

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
    ChatDashboardComponent,
    ChatLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
