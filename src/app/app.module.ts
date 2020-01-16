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
import { ToastrModule } from 'ngx-toastr';

// local modules
import { CartModule } from 'src/app/shopping-cart';
import { ChatModule } from 'src/app/chat';
import { UserModule } from 'src/app/user';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // core angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // third party
    MaterialModule,
    ToastrModule.forRoot({
      progressBar: true,
    }),
    // local modules
    AppRoutingModule,
    CartModule,
    ChatModule,
    UserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
