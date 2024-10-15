import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoLogeadoElementosProcedimientoComponent } from './usuario-no-logeado-elementos-procedimiento.component';

describe('UsuarioNoLogeadoElementosProcedimientoComponent', () => {
  let component: UsuarioNoLogeadoElementosProcedimientoComponent;
  let fixture: ComponentFixture<UsuarioNoLogeadoElementosProcedimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNoLogeadoElementosProcedimientoComponent]
    });
    fixture = TestBed.createComponent(UsuarioNoLogeadoElementosProcedimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
