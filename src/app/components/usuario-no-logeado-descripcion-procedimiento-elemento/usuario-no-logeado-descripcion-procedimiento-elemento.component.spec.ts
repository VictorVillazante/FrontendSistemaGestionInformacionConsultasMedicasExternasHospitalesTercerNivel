import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoLogeadoDescripcionProcedimientoElementoComponent } from './usuario-no-logeado-descripcion-procedimiento-elemento.component';

describe('UsuarioNoLogeadoDescripcionProcedimientoElementoComponent', () => {
  let component: UsuarioNoLogeadoDescripcionProcedimientoElementoComponent;
  let fixture: ComponentFixture<UsuarioNoLogeadoDescripcionProcedimientoElementoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNoLogeadoDescripcionProcedimientoElementoComponent]
    });
    fixture = TestBed.createComponent(UsuarioNoLogeadoDescripcionProcedimientoElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
