import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDetalleConsultorioComponent } from './formulario-detalle-consultorio.component';

describe('FormularioDetalleConsultorioComponent', () => {
  let component: FormularioDetalleConsultorioComponent;
  let fixture: ComponentFixture<FormularioDetalleConsultorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDetalleConsultorioComponent]
    });
    fixture = TestBed.createComponent(FormularioDetalleConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
