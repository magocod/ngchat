import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// root urls
import { AppRoutingModule } from 'src/app/app-routing.module';

// core app
import { AppComponent } from 'src/app/app.component';

// shopping cart
import { TopBarComponent } from 'src/app/shopping-cart/top-bar/top-bar.component';
import {
  ProductListComponent
} from 'src/app/shopping-cart/product-list/product-list.component';
import {
  ProductAlertsComponent
} from 'src/app/shopping-cart/product-list/product-alerts/product-alerts.component';
import {
  ProductDetailsComponent
} from 'src/app/shopping-cart/product-details/product-details.component';
import { CartComponent } from 'src/app/shopping-cart//cart/cart.component';
import { ShippingComponent } from 'src/app/shopping-cart//shipping/shipping.component';
import { ShoppingCartComponent } from 'src/app/shopping-cart/shopping-cart.component';

// auth
import { LoginComponent } from './auth/login/login.component';

// angular material
import {
  MatToolbarModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    // shopping cart
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ShoppingCartComponent,
    // auth
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // material
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
