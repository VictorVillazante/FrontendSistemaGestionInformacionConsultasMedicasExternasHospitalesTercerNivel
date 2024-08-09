import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoLogeadoNoticiasComponent } from './usuario-no-logeado-noticias.component';

describe('UsuarioNoLogeadoNoticiasComponent', () => {
  let component: UsuarioNoLogeadoNoticiasComponent;
  let fixture: ComponentFixture<UsuarioNoLogeadoNoticiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNoLogeadoNoticiasComponent]
    });
    fixture = TestBed.createComponent(UsuarioNoLogeadoNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
