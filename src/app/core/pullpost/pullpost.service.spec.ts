import { TestBed } from '@angular/core/testing';

import { PullpostService } from './pullpost.service';

describe('PullpostService', () => {
  let service: PullpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PullpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
