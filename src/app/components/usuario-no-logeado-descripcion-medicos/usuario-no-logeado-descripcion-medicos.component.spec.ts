import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoLogeadoDescripcionMedicosComponent } from './usuario-no-logeado-descripcion-medicos.component';

describe('UsuarioNoLogeadoDescripcionMedicosComponent', () => {
  let component: UsuarioNoLogeadoDescripcionMedicosComponent;
  let fixture: ComponentFixture<UsuarioNoLogeadoDescripcionMedicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNoLogeadoDescripcionMedicosComponent]
    });
    fixture = TestBed.createComponent(UsuarioNoLogeadoDescripcionMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
