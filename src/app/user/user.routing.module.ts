import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
	LoginComponent,
	UserBaseComponent,
  UserListComponent,
  UserDetailsComponent,
  UserCreateComponent
} from 'src/app/user/views';

const routes: Routes = [
  {
    path: '',
    component: UserBaseComponent,
    children: [
      { path: '', component: UserListComponent },
      {
        path: 'user/:userId',
        component: UserDetailsComponent
      },
      { path: 'create', component: UserCreateComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
