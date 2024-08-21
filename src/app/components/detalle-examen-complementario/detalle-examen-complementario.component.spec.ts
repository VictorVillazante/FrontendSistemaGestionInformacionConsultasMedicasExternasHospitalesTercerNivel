import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleExamenComplementarioComponent } from './detalle-examen-complementario.component';

describe('DetalleExamenComplementarioComponent', () => {
  let component: DetalleExamenComplementarioComponent;
  let fixture: ComponentFixture<DetalleExamenComplementarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleExamenComplementarioComponent]
    });
    fixture = TestBed.createComponent(DetalleExamenComplementarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
