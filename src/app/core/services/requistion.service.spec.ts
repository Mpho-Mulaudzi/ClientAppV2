import { TestBed } from '@angular/core/testing';

import { RequistionService } from './requistion.service';

describe('RequistionService', () => {
  let service: RequistionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequistionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
