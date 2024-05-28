import { TestBed } from '@angular/core/testing';

import { NotaEvolucionService } from './nota-evolucion.service';

describe('NotaEvolucionService', () => {
  let service: NotaEvolucionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotaEvolucionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
