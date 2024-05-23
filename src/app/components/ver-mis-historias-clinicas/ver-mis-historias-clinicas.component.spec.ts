import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMisHistoriasClinicasComponent } from './ver-mis-historias-clinicas.component';

describe('VerMisHistoriasClinicasComponent', () => {
  let component: VerMisHistoriasClinicasComponent;
  let fixture: ComponentFixture<VerMisHistoriasClinicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerMisHistoriasClinicasComponent]
    });
    fixture = TestBed.createComponent(VerMisHistoriasClinicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
