import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionComunicadoComponent } from './actualizacion-comunicado.component';

describe('ActualizacionComunicadoComponent', () => {
  let component: ActualizacionComunicadoComponent;
  let fixture: ComponentFixture<ActualizacionComunicadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionComunicadoComponent]
    });
    fixture = TestBed.createComponent(ActualizacionComunicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
