import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoLogeadoDetalleNoticiaComponent } from './usuario-no-logeado-detalle-noticia.component';

describe('UsuarioNoLogeadoDetalleNoticiaComponent', () => {
  let component: UsuarioNoLogeadoDetalleNoticiaComponent;
  let fixture: ComponentFixture<UsuarioNoLogeadoDetalleNoticiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNoLogeadoDetalleNoticiaComponent]
    });
    fixture = TestBed.createComponent(UsuarioNoLogeadoDetalleNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
