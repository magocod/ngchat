import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-base',
  templateUrl: './worker-base.component.html',
  styleUrls: ['./worker-base.component.scss']
})
export class WorkerBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.callConsoleWorker();
  }

  /**
   * [callConsoleWorker description]
   */
  callConsoleWorker(): void {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('../../workers/console.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      worker.postMessage('hello');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

}
