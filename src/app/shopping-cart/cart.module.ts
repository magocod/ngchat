import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// third party
import { MaterialModule } from 'src/app/material.module';

import { CartRoutingModule } from './cart.routing.module';

import {
  TopBarComponent,
  ProductListComponent,
  ProductDetailsComponent,
  CartComponent,
  ShippingComponent,
  ShoppingCartComponent,
} from 'src/app/shopping-cart/views';

import {
  ProductAlertsComponent,
} from 'src/app/shopping-cart/components';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // third party
    MaterialModule
  ],
  exports: [
    ShoppingCartComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ShoppingCartComponent,
  ],
})
export class CartModule { }
