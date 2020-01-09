import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LoginComponent } from 'src/app/auth/login/login.component';

// shopping cart
import {
	ProductListComponent
} from 'src/app/shopping-cart/product-list/product-list.component';
import {
	ProductDetailsComponent
} from 'src/app/shopping-cart/product-details/product-details.component';
import { CartComponent } from 'src/app/shopping-cart/cart/cart.component';
import { ShippingComponent } from 'src/app/shopping-cart/shipping/shipping.component';
import { ShoppingCartComponent } from 'src/app/shopping-cart/shopping-cart.component';

// chat
import { ChatDashboardComponent } from 'src/app/chat/chat-dashboard/chat-dashboard.component';
import { ChatLayoutComponent } from 'src/app/chat/chat-layout/chat-layout.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{
		path: 'chat',
		component: ChatLayoutComponent,
		children: [
			{ path: '', component: ChatDashboardComponent },
		]
	},
	{ 
		path: 'shopping_cart',
		loadChildren: () => import('src/app/shopping-cart/cart.module').then((mod) =>{
			// console.log(mod);
			return mod.CartModule;
		}),
	},	
];

@NgModule({
  imports: [
  	RouterModule.forRoot(
  		routes,
  		{
		    // enableTracing: true, // <-- debugging purposes only
		    preloadingStrategy: PreloadAllModules,
		},
  	)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
