import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCertificadosMedicosComponent } from './gestion-certificados-medicos.component';

describe('GestionCertificadosMedicosComponent', () => {
  let component: GestionCertificadosMedicosComponent;
  let fixture: ComponentFixture<GestionCertificadosMedicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionCertificadosMedicosComponent]
    });
    fixture = TestBed.createComponent(GestionCertificadosMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
