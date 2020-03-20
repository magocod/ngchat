import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
  DialogRoomCreateDialogComponent,
  RoomDetailsComponent,
  RoomListComponent
} from 'src/app/chat/views';


@NgModule({
  declarations: [
    ChatDashboardComponent,
    ChatLayoutComponent,
    RoomCreateComponent,
    DialogRoomCreateDialogComponent,
    RoomDetailsComponent,
    RoomListComponent,
    MessageCreateComponent,
    MessageListComponent
  ],
  entryComponents: [
    DialogRoomCreateDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
