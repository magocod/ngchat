import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerBaseComponent } from './views/worker-base/worker-base.component';
import { MaterialModule } from 'src/app/material.module';

import { WorkerRoutingModule } from './worker.routing.module';

@NgModule({
  declarations: [
    WorkerBaseComponent
  ],
  imports: [
    CommonModule,
    WorkerRoutingModule,
    MaterialModule
  ]
})
export class WorkerModule { }
