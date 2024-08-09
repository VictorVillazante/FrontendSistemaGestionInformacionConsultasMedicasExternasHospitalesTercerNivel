import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoLogeadoProcesoInscripcionComponent } from './usuario-no-logeado-proceso-inscripcion.component';

describe('UsuarioNoLogeadoProcesoInscripcionComponent', () => {
  let component: UsuarioNoLogeadoProcesoInscripcionComponent;
  let fixture: ComponentFixture<UsuarioNoLogeadoProcesoInscripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNoLogeadoProcesoInscripcionComponent]
    });
    fixture = TestBed.createComponent(UsuarioNoLogeadoProcesoInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
