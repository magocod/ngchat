import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatDashboardComponent } from 'src/app/chat/chat-dashboard/chat-dashboard.component';
import { ChatLayoutComponent } from 'src/app/chat/chat-layout/chat-layout.component';

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
