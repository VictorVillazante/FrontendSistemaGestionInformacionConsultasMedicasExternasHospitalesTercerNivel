import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionProcedimientoComponent } from './actualizacion-procedimiento.component';

describe('ActualizacionProcedimientoComponent', () => {
  let component: ActualizacionProcedimientoComponent;
  let fixture: ComponentFixture<ActualizacionProcedimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionProcedimientoComponent]
    });
    fixture = TestBed.createComponent(ActualizacionProcedimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
