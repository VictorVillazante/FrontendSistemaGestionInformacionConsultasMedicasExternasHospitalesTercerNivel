import { TestBed } from '@angular/core/testing';

import { PapeletasInternacionService } from './papeletas-internacion.service';

describe('PapeletasInternacionService', () => {
  let service: PapeletasInternacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PapeletasInternacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
