import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from 'src/app/chat/chat.routing.module';

import { ChatDashboardComponent } from 'src/app/chat/chat-dashboard/chat-dashboard.component';
import { ChatLayoutComponent } from 'src/app/chat/chat-layout/chat-layout.component';

// angular material
import {
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatExpansionModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  declarations: [
  	ChatDashboardComponent,
  	ChatLayoutComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    // material
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatExpansionModule,
    MatTabsModule
  ]
})
export class ChatModule { }
