import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTurnosAtencionMedicaComponent } from './gestion-turnos-atencion-medica.component';

describe('GestionTurnosAtencionMedicaComponent', () => {
  let component: GestionTurnosAtencionMedicaComponent;
  let fixture: ComponentFixture<GestionTurnosAtencionMedicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionTurnosAtencionMedicaComponent]
    });
    fixture = TestBed.createComponent(GestionTurnosAtencionMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
