import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDetalleEspecialidadComponent } from './formulario-detalle-especialidad.component';

describe('FormularioDetalleEspecialidadComponent', () => {
  let component: FormularioDetalleEspecialidadComponent;
  let fixture: ComponentFixture<FormularioDetalleEspecialidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDetalleEspecialidadComponent]
    });
    fixture = TestBed.createComponent(FormularioDetalleEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
