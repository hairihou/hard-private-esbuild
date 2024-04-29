import { TestBed } from '@angular/core/testing';

import { HardPrivateService } from './hard-private.service';

describe('HardPrivateService', () => {
  let service: HardPrivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardPrivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
