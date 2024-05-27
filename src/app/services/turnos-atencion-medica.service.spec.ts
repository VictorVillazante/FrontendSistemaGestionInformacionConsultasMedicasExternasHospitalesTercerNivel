import { TestBed } from '@angular/core/testing';

import { TurnosAtencionMedicaService } from './turnos-atencion-medica.service';

describe('TurnosAtencionMedicaService', () => {
  let service: TurnosAtencionMedicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurnosAtencionMedicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
