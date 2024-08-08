import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoLogeadoMedicosEspecialistasComponent } from './usuario-no-logeado-medicos-especialistas.component';

describe('UsuarioNoLogeadoMedicosEspecialistasComponent', () => {
  let component: UsuarioNoLogeadoMedicosEspecialistasComponent;
  let fixture: ComponentFixture<UsuarioNoLogeadoMedicosEspecialistasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNoLogeadoMedicosEspecialistasComponent]
    });
    fixture = TestBed.createComponent(UsuarioNoLogeadoMedicosEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
