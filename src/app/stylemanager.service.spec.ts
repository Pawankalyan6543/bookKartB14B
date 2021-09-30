import { TestBed } from '@angular/core/testing';

import { StyleManagerService } from './stylemanager.service';

describe('StylemanagerService', () => {
  let service: StyleManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
