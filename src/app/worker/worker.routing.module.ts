import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
	WorkerBaseComponent
} from './views/worker-base/worker-base.component';

const routes: Routes = [
  {
    path: '',
    component: WorkerBaseComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WorkerRoutingModule { }