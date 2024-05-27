import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionNotaReferenciaComponent } from './actualizacion-nota-referencia.component';

describe('ActualizacionNotaReferenciaComponent', () => {
  let component: ActualizacionNotaReferenciaComponent;
  let fixture: ComponentFixture<ActualizacionNotaReferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionNotaReferenciaComponent]
    });
    fixture = TestBed.createComponent(ActualizacionNotaReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
