import { TestBed } from '@angular/core/testing';

import { InterconsultasService } from './interconsultas.service';

describe('InterconsultasService', () => {
  let service: InterconsultasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterconsultasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
