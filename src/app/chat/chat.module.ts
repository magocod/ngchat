import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// third party
import { MaterialModule } from 'src/app/material.module';

import { ChatRoutingModule } from 'src/app/chat/chat.routing.module';

import {
  ChatDashboardComponent,
  ChatLayoutComponent
} from 'src/app/chat/views';


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
  ],
  exports: [
    ChatDashboardComponent,
    ChatLayoutComponent
  ]
})
export class ChatModule { }
