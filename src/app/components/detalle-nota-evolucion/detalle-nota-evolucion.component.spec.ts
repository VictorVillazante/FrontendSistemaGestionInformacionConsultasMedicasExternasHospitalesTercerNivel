import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNotaEvolucionComponent } from './detalle-nota-evolucion.component';

describe('DetalleNotaEvolucionComponent', () => {
  let component: DetalleNotaEvolucionComponent;
  let fixture: ComponentFixture<DetalleNotaEvolucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleNotaEvolucionComponent]
    });
    fixture = TestBed.createComponent(DetalleNotaEvolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
