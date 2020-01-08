import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/auth/login/login.component';

import {
	ProductListComponent
} from 'src/app/shopping-cart/product-list/product-list.component';
import {
	ProductDetailsComponent
} from 'src/app/shopping-cart/product-details/product-details.component';

import { CartComponent } from 'src/app/shopping-cart/cart/cart.component';
import { ShippingComponent } from 'src/app/shopping-cart/shipping/shipping.component';
import { ShoppingCartComponent } from 'src/app/shopping-cart/shopping-cart.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{
		path: 'shopping_cart',
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
