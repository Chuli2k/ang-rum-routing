import { TestBed } from '@angular/core/testing';

import { ApmService } from './apm.service';

describe('ApmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApmService = TestBed.get(ApmService);
    expect(service).toBeTruthy();
  });
});
