import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoLogeadoEspecialidadedesComponent } from './usuario-no-logeado-especialidadedes.component';

describe('UsuarioNoLogeadoEspecialidadedesComponent', () => {
  let component: UsuarioNoLogeadoEspecialidadedesComponent;
  let fixture: ComponentFixture<UsuarioNoLogeadoEspecialidadedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNoLogeadoEspecialidadedesComponent]
    });
    fixture = TestBed.createComponent(UsuarioNoLogeadoEspecialidadedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
