import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHistoriasClinicasComponent } from './gestion-historias-clinicas.component';

describe('GestionHistoriasClinicasComponent', () => {
  let component: GestionHistoriasClinicasComponent;
  let fixture: ComponentFixture<GestionHistoriasClinicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionHistoriasClinicasComponent]
    });
    fixture = TestBed.createComponent(GestionHistoriasClinicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
