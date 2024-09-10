import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDetalleUsuarioComponent } from './formulario-detalle-usuario.component';

describe('FormularioDetalleUsuarioComponent', () => {
  let component: FormularioDetalleUsuarioComponent;
  let fixture: ComponentFixture<FormularioDetalleUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDetalleUsuarioComponent]
    });
    fixture = TestBed.createComponent(FormularioDetalleUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
