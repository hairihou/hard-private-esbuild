import { TestBed } from '@angular/core/testing';

import { SoftPrivateService } from './soft-private.service';

describe('SoftPrivateService', () => {
  let service: SoftPrivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftPrivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
