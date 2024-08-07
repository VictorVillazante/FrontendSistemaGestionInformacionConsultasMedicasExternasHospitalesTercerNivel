import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesAtencionComponent } from './especialidades-atencion.component';

describe('EspecialidadesAtencionComponent', () => {
  let component: EspecialidadesAtencionComponent;
  let fixture: ComponentFixture<EspecialidadesAtencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecialidadesAtencionComponent]
    });
    fixture = TestBed.createComponent(EspecialidadesAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
