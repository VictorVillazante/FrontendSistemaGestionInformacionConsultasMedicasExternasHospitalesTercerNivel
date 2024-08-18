import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDocumentosComponent } from './listado-documentos.component';

describe('ListadoDocumentosComponent', () => {
  let component: ListadoDocumentosComponent;
  let fixture: ComponentFixture<ListadoDocumentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoDocumentosComponent]
    });
    fixture = TestBed.createComponent(ListadoDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
