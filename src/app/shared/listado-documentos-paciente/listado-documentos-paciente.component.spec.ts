import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDocumentosPacienteComponent } from './listado-documentos-paciente.component';

describe('ListadoDocumentosPacienteComponent', () => {
  let component: ListadoDocumentosPacienteComponent;
  let fixture: ComponentFixture<ListadoDocumentosPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoDocumentosPacienteComponent]
    });
    fixture = TestBed.createComponent(ListadoDocumentosPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
