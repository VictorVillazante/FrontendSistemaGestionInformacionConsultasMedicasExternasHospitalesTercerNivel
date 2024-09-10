import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionEspecialidadComponent } from './actualizacion-especialidad.component';

describe('ActualizacionEspecialidadComponent', () => {
  let component: ActualizacionEspecialidadComponent;
  let fixture: ComponentFixture<ActualizacionEspecialidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionEspecialidadComponent]
    });
    fixture = TestBed.createComponent(ActualizacionEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
