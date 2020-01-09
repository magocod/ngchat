import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    // HttpClientModule,
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
    MatTabsModule
  ]
})
export class CartModule { }
