import { TestBed } from '@angular/core/testing';

import { AmizadesService } from './amizades.service';

describe('AmizadesService', () => {
  let service: AmizadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmizadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
