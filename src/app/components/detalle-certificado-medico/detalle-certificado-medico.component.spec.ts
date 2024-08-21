import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCertificadoMedicoComponent } from './detalle-certificado-medico.component';

describe('DetalleCertificadoMedicoComponent', () => {
  let component: DetalleCertificadoMedicoComponent;
  let fixture: ComponentFixture<DetalleCertificadoMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCertificadoMedicoComponent]
    });
    fixture = TestBed.createComponent(DetalleCertificadoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
