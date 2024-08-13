import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoLogeadoEspeciaildadMedicaComponent } from './usuario-no-logeado-especiaildad-medica.component';

describe('UsuarioNoLogeadoEspeciaildadMedicaComponent', () => {
  let component: UsuarioNoLogeadoEspeciaildadMedicaComponent;
  let fixture: ComponentFixture<UsuarioNoLogeadoEspeciaildadMedicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNoLogeadoEspeciaildadMedicaComponent]
    });
    fixture = TestBed.createComponent(UsuarioNoLogeadoEspeciaildadMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
