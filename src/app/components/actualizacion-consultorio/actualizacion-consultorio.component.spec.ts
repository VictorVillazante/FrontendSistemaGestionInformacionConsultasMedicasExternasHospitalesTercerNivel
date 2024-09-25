import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionConsultorioComponent } from './actualizacion-consultorio.component';

describe('ActualizacionConsultorioComponent', () => {
  let component: ActualizacionConsultorioComponent;
  let fixture: ComponentFixture<ActualizacionConsultorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionConsultorioComponent]
    });
    fixture = TestBed.createComponent(ActualizacionConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
