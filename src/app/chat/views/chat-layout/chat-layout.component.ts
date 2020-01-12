import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChatwebsocketService } from "src/app/chat/services";
import { IDjangoUser } from 'src/app/user/services';

export interface ISideBarItems {
  text: string;
  icon: string;
  href: string;
  is_superuser: boolean;
  permissions: any[];
}

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.css']
})
export class ChatLayoutComponent implements OnInit {

	items: ISideBarItems[] = [
		{
      text: 'Users',
      icon: 'supervised_user_circle',
      href: '/chat/users',
      is_superuser: true,
      permissions: [],
    },
	];

  constructor(
  	private router: Router,
    private chatwebsocketservice: ChatwebsocketService,
  ) {
    this.chatwebsocketservice.messages.subscribe({
      next: (v) => {
        console.log(v);
      }
    });
  }

  ngOnInit() {
  }

  /**
   * [redirect description]
   * @param {string} route [description]
   */
  redirect(route: string) {
  	this.router.navigate([route]);
  }

  filterOptions(): ISideBarItems[] {
    const user: IDjangoUser = JSON.parse(`${localStorage.getItem('user')}`);
    if (user === null) {
      return [];
    }

    if (user.is_superuser) {
      return this.items;
    }

    // super user an permissions
    return this.items.filter((value: ISideBarItems) => {
      if (value.is_superuser === false) {
        return value;
      }
    });
  }

}
