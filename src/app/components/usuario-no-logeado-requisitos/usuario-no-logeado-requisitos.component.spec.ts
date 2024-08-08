import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoLogeadoRequisitosComponent } from './usuario-no-logeado-requisitos.component';

describe('UsuarioNoLogeadoRequisitosComponent', () => {
  let component: UsuarioNoLogeadoRequisitosComponent;
  let fixture: ComponentFixture<UsuarioNoLogeadoRequisitosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNoLogeadoRequisitosComponent]
    });
    fixture = TestBed.createComponent(UsuarioNoLogeadoRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
