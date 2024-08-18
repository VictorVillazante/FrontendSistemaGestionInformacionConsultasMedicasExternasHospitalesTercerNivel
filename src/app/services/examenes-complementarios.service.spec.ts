import { TestBed } from '@angular/core/testing';

import { ExamenesComplementariosService } from './examenes-complementarios.service';

describe('ExamenesComplementariosService', () => {
  let service: ExamenesComplementariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamenesComplementariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
