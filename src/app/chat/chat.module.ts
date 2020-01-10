import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// third party
import { MaterialModule } from 'src/app/material.module';

import { ChatRoutingModule } from 'src/app/chat/chat.routing.module';

import { ChatDashboardComponent } from 'src/app/chat/chat-dashboard/chat-dashboard.component';
import { ChatLayoutComponent } from 'src/app/chat/chat-layout/chat-layout.component';

@NgModule({
  declarations: [
  	ChatDashboardComponent,
  	ChatLayoutComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    // third party
    MaterialModule
  ]
})
export class ChatModule { }
