import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

// root urls
import { AppRoutingModule } from 'src/app/app-routing.module';

// core app
import { AppComponent } from 'src/app/app.component';

// third party
import { MaterialModule } from 'src/app/material.module';
import { ToastrModule } from 'ngx-toastr';

// local modules
import { AuthModule } from 'src/app/auth';

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
    AuthModule,
    ServiceWorkerModule.register(
      'ngsw-worker.js',
      { enabled: environment.production }
    )
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
