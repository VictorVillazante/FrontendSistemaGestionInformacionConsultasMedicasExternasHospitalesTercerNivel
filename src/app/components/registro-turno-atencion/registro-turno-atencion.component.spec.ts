import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTurnoAtencionComponent } from './registro-turno-atencion.component';

describe('RegistroTurnoAtencionComponent', () => {
  let component: RegistroTurnoAtencionComponent;
  let fixture: ComponentFixture<RegistroTurnoAtencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroTurnoAtencionComponent]
    });
    fixture = TestBed.createComponent(RegistroTurnoAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
