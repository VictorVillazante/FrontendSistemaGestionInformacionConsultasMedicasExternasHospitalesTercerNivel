import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoormularioDetalleProcedimientoComponent } from './foormulario-detalle-procedimiento.component';

describe('FoormularioDetalleProcedimientoComponent', () => {
  let component: FoormularioDetalleProcedimientoComponent;
  let fixture: ComponentFixture<FoormularioDetalleProcedimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoormularioDetalleProcedimientoComponent]
    });
    fixture = TestBed.createComponent(FoormularioDetalleProcedimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
