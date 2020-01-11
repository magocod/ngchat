import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// third party
import { MaterialModule } from 'src/app/material.module';
import { UserModule } from 'src/app/user';

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
    UserModule,
    // third party
    MaterialModule
  ],
  exports: [
    ChatDashboardComponent,
    ChatLayoutComponent
  ]
})
export class ChatModule { }
