import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerBaseComponent } from './worker-base.component';

describe('WorkerBaseComponent', () => {
  let component: WorkerBaseComponent;
  let fixture: ComponentFixture<WorkerBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

});
