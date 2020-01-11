import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  TopBarComponent,
  ProductListComponent,
  ProductDetailsComponent,
  CartComponent,
  ShippingComponent,
  ShoppingCartComponent,
} from 'src/app/shopping-cart/views';


const routes: Routes = [
  {
    path: '',
    component: ShoppingCartComponent,
    children: [
      { path: '', component: ProductListComponent },
      {
        path: 'products/:productId',
        component: ProductDetailsComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'shipping',
        component: ShippingComponent
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CartRoutingModule { }
