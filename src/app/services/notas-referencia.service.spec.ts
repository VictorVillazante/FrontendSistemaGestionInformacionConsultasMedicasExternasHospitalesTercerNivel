import { TestBed } from '@angular/core/testing';

import { NotasReferenciaService } from './notas-referencia.service';

describe('NotasReferenciaService', () => {
  let service: NotasReferenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasReferenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
