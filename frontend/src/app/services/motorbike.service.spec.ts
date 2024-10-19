import { TestBed } from '@angular/core/testing';

import { MotorbikeService } from './motorbike.service';

describe('MotorbikeService', () => {
  let service: MotorbikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotorbikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
