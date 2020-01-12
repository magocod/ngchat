import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// third party
import { MaterialModule } from 'src/app/material.module';
import { UserModule } from 'src/app/user';

import { ChatRoutingModule } from 'src/app/chat/chat.routing.module';

import {
  MessageCreateComponent,
  MessageListComponent
} from 'src/app/chat/components';

import {
  ChatDashboardComponent,
  ChatLayoutComponent,
  RoomCreateComponent,
  RoomDetailsComponent,
  RoomListComponent
} from 'src/app/chat/views';


@NgModule({
  declarations: [
    ChatDashboardComponent,
    ChatLayoutComponent,
    RoomCreateComponent,
    RoomDetailsComponent,
    RoomListComponent,
    MessageCreateComponent,
    MessageListComponent
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
    ChatLayoutComponent,
    RoomCreateComponent,
    RoomDetailsComponent,
    RoomListComponent,
    MessageCreateComponent,
    MessageListComponent
  ]
})
export class ChatModule { }
