import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoLogeadoPasosComponent } from './usuario-no-logeado-pasos.component';

describe('UsuarioNoLogeadoPasosComponent', () => {
  let component: UsuarioNoLogeadoPasosComponent;
  let fixture: ComponentFixture<UsuarioNoLogeadoPasosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNoLogeadoPasosComponent]
    });
    fixture = TestBed.createComponent(UsuarioNoLogeadoPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
