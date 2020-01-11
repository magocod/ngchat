import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// third party
import { MaterialModule } from 'src/app/material.module';

import { CartRoutingModule } from 'src/app/shopping-cart/cart.routing.module';

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
