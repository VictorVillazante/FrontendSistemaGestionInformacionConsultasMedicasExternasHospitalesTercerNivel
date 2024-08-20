import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFiltradoDocumentosPacienteComponent } from './formulario-filtrado-documentos-paciente.component';

describe('FormularioFiltradoDocumentosPacienteComponent', () => {
  let component: FormularioFiltradoDocumentosPacienteComponent;
  let fixture: ComponentFixture<FormularioFiltradoDocumentosPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioFiltradoDocumentosPacienteComponent]
    });
    fixture = TestBed.createComponent(FormularioFiltradoDocumentosPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
