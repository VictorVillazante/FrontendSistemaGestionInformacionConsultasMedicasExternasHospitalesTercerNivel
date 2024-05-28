import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionTurnoAtencionComponent } from './actualizacion-turno-atencion.component';

describe('ActualizacionTurnoAtencionComponent', () => {
  let component: ActualizacionTurnoAtencionComponent;
  let fixture: ComponentFixture<ActualizacionTurnoAtencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionTurnoAtencionComponent]
    });
    fixture = TestBed.createComponent(ActualizacionTurnoAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
