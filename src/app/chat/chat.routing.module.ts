import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/user/services';

import {
  ChatDashboardComponent,
  ChatLayoutComponent,
  RoomDetailsComponent,
} from 'src/app/chat/views';

const routes: Routes = [
  {
    path: '',
    component: ChatLayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', component: ChatDashboardComponent },
      { path: 'room/:roomId', component: RoomDetailsComponent },
      {
        path: 'users',
        loadChildren: () => import('src/app/user/user.module').then(mod => mod.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
