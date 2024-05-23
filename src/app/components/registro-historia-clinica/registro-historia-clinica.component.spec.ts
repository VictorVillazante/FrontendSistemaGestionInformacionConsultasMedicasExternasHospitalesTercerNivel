import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHistoriaClinicaComponent } from './registro-historia-clinica.component';

describe('RegistroHistoriaClinicaComponent', () => {
  let component: RegistroHistoriaClinicaComponent;
  let fixture: ComponentFixture<RegistroHistoriaClinicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroHistoriaClinicaComponent]
    });
    fixture = TestBed.createComponent(RegistroHistoriaClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
