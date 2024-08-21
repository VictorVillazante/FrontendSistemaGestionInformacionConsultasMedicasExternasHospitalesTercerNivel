import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCertificadosMedicosComponent } from './mis-certificados-medicos.component';

describe('MisCertificadosMedicosComponent', () => {
  let component: MisCertificadosMedicosComponent;
  let fixture: ComponentFixture<MisCertificadosMedicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisCertificadosMedicosComponent]
    });
    fixture = TestBed.createComponent(MisCertificadosMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
