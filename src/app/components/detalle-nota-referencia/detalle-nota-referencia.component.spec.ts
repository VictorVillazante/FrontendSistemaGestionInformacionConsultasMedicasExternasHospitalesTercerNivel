import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleNotaReferenciaComponent } from './detalle-nota-referencia.component';

describe('DetalleNotaReferenciaComponent', () => {
  let component: DetalleNotaReferenciaComponent;
  let fixture: ComponentFixture<DetalleNotaReferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleNotaReferenciaComponent]
    });
    fixture = TestBed.createComponent(DetalleNotaReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
