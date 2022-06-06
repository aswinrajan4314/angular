import { TestBed } from '@angular/core/testing';

import { MloginService } from './mlogin.service';

describe('MloginService', () => {
  let service: MloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
