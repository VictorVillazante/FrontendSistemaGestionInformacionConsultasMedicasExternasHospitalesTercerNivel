import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionPapeletaInternacionComponent } from './actualizacion-papeleta-internacion.component';

describe('ActualizacionPapeletaInternacionComponent', () => {
  let component: ActualizacionPapeletaInternacionComponent;
  let fixture: ComponentFixture<ActualizacionPapeletaInternacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionPapeletaInternacionComponent]
    });
    fixture = TestBed.createComponent(ActualizacionPapeletaInternacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
