import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionPacienteComponent } from './actualizacion-paciente.component';

describe('ActualizacionPacienteComponent', () => {
  let component: ActualizacionPacienteComponent;
  let fixture: ComponentFixture<ActualizacionPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionPacienteComponent]
    });
    fixture = TestBed.createComponent(ActualizacionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
