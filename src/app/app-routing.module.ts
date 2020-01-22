import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// auth
import { LoginComponent } from 'src/app/user';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(mod => mod.ChatModule),
  },
  {
    path: 'shopping_cart',
    loadChildren: () => import('./shopping-cart/cart.module').then(mod => mod.CartModule),
  },
  {
    path: 'workers',
    loadChildren: () => import('./worker/worker.module').then(mod => mod.WorkerModule),
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
