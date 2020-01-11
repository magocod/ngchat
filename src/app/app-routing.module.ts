import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// auth
import { LoginComponent } from 'src/app/user';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'chat',
    loadChildren: () => import('src/app/chat/chat.module').then((mod) => {
      // console.log(mod);
      return mod.ChatModule;
    }),
  },
  {
    path: 'shopping_cart',
    loadChildren: () => import('src/app/shopping-cart/cart.module').then((mod) => {
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
        // preloadingStrategy: PreloadAllModules,
      },
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
