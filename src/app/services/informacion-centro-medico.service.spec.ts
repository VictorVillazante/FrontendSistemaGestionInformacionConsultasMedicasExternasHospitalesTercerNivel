import { TestBed } from '@angular/core/testing';

import { InformacionCentroMedicoService } from './informacion-centro-medico.service';

describe('InformacionCentroMedicoService', () => {
  let service: InformacionCentroMedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacionCentroMedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
