import { TestBed } from '@angular/core/testing';

import { BuscaAssuntosService } from './busca-assuntos.service';

describe('BuscaAssuntosService', () => {
  let service: BuscaAssuntosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaAssuntosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
