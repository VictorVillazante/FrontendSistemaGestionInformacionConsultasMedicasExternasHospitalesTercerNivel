import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCertificadoMedicoComponent } from './registro-certificado-medico.component';

describe('RegistroCertificadoMedicoComponent', () => {
  let component: RegistroCertificadoMedicoComponent;
  let fixture: ComponentFixture<RegistroCertificadoMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroCertificadoMedicoComponent]
    });
    fixture = TestBed.createComponent(RegistroCertificadoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
