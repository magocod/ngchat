import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ChatDashboardComponent,
  ChatLayoutComponent
} from 'src/app/chat/views';

const routes: Routes = [
  {
    path: '',
    component: ChatLayoutComponent,
    children: [
      { path: '', component: ChatDashboardComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
