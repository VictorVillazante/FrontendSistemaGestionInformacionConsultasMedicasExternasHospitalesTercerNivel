import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionMedicoComponent } from './actualizacion-medico.component';

describe('ActualizacionMedicoComponent', () => {
  let component: ActualizacionMedicoComponent;
  let fixture: ComponentFixture<ActualizacionMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionMedicoComponent]
    });
    fixture = TestBed.createComponent(ActualizacionMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
