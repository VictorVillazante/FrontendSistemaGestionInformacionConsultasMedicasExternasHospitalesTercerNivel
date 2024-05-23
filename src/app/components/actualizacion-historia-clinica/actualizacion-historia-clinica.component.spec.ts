import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionHistoriaClinicaComponent } from './actualizacion-historia-clinica.component';

describe('ActualizacionHistoriaClinicaComponent', () => {
  let component: ActualizacionHistoriaClinicaComponent;
  let fixture: ComponentFixture<ActualizacionHistoriaClinicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionHistoriaClinicaComponent]
    });
    fixture = TestBed.createComponent(ActualizacionHistoriaClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
