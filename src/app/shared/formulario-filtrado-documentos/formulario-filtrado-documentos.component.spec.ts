import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFiltradoDocumentosComponent } from './formulario-filtrado-documentos.component';

describe('FormularioFiltradoDocumentosComponent', () => {
  let component: FormularioFiltradoDocumentosComponent;
  let fixture: ComponentFixture<FormularioFiltradoDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioFiltradoDocumentosComponent]
    });
    fixture = TestBed.createComponent(FormularioFiltradoDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
