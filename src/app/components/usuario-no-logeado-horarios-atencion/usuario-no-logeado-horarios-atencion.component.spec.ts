import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoLogeadoHorariosAtencionComponent } from './usuario-no-logeado-horarios-atencion.component';

describe('UsuarioNoLogeadoHorariosAtencionComponent', () => {
  let component: UsuarioNoLogeadoHorariosAtencionComponent;
  let fixture: ComponentFixture<UsuarioNoLogeadoHorariosAtencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNoLogeadoHorariosAtencionComponent]
    });
    fixture = TestBed.createComponent(UsuarioNoLogeadoHorariosAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
