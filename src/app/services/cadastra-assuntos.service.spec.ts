import { TestBed } from '@angular/core/testing';

import { CadastraAssuntosService } from './cadastra-assuntos.service';

describe('CadastraAssuntosService', () => {
  let service: CadastraAssuntosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastraAssuntosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
