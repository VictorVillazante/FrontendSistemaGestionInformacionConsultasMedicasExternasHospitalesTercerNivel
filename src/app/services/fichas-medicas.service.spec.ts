import { TestBed } from '@angular/core/testing';

import { FichasMedicasService } from './fichas-medicas.service';

describe('FichasMedicasService', () => {
  let service: FichasMedicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichasMedicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
