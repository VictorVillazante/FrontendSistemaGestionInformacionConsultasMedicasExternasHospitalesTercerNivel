import { TestBed } from '@angular/core/testing';

import { CertificadosMedicosService } from './certificados-medicos.service';

describe('CertificadosMedicosService', () => {
  let service: CertificadosMedicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificadosMedicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
