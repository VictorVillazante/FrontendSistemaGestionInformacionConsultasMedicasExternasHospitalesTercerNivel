import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoLogeadoProcedimientosComponent } from './usuario-no-logeado-procedimientos.component';

describe('UsuarioNoLogeadoProcedimientosComponent', () => {
  let component: UsuarioNoLogeadoProcedimientosComponent;
  let fixture: ComponentFixture<UsuarioNoLogeadoProcedimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNoLogeadoProcedimientosComponent]
    });
    fixture = TestBed.createComponent(UsuarioNoLogeadoProcedimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
