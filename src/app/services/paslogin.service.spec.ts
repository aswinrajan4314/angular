import { TestBed } from '@angular/core/testing';

import { PasloginService } from './paslogin.service';


describe('PasloginService', () => {
  let service: PasloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
