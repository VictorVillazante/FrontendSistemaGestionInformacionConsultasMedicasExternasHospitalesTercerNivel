import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionProcedimientoAdmisionComponent } from './actualizacion-procedimiento-admision.component';

describe('ActualizacionProcedimientoAdmisionComponent', () => {
  let component: ActualizacionProcedimientoAdmisionComponent;
  let fixture: ComponentFixture<ActualizacionProcedimientoAdmisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionProcedimientoAdmisionComponent]
    });
    fixture = TestBed.createComponent(ActualizacionProcedimientoAdmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
