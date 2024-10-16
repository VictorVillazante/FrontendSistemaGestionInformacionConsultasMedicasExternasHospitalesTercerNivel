import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHistoriaClinicaFormularioDocumentosExpedienteComponent } from './input-historia-clinica-formulario-documentos-expediente.component';

describe('InputHistoriaClinicaFormularioDocumentosExpedienteComponent', () => {
  let component: InputHistoriaClinicaFormularioDocumentosExpedienteComponent;
  let fixture: ComponentFixture<InputHistoriaClinicaFormularioDocumentosExpedienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputHistoriaClinicaFormularioDocumentosExpedienteComponent]
    });
    fixture = TestBed.createComponent(InputHistoriaClinicaFormularioDocumentosExpedienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
