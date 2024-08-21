import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionCertificadoMedicoComponent } from './actualizacion-certificado-medico.component';

describe('ActualizacionCertificadoMedicoComponent', () => {
  let component: ActualizacionCertificadoMedicoComponent;
  let fixture: ComponentFixture<ActualizacionCertificadoMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionCertificadoMedicoComponent]
    });
    fixture = TestBed.createComponent(ActualizacionCertificadoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
