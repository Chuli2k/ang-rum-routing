import { Injectable } from '@angular/core';
import { init as initApm } from '@elastic/apm-rum';

@Injectable({
  providedIn: 'root'
})
export class ApmService {

  public apm: any;

  constructor() {
    this.apm = initApm({

      // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
      serviceName: 'test',
      // Set custom APM Server URL (default: http://localhost:8200)
      // serverUrl: '',
      // Set service version (required for sourcemap feature)
      serviceVersion: 'v01',
      environment: 'dev',
      pageLoadTransactionName: 'test-page-load',
      logLevel: 'trace',
      disableInstrumentations: ['history', 'page-load', 'fetch']// , 'xmlhttprequest'],
      // instrument: false,
    });
   }
}
