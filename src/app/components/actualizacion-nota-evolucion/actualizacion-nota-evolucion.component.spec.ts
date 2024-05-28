import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionNotaEvolucionComponent } from './actualizacion-nota-evolucion.component';

describe('ActualizacionNotaEvolucionComponent', () => {
  let component: ActualizacionNotaEvolucionComponent;
  let fixture: ComponentFixture<ActualizacionNotaEvolucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionNotaEvolucionComponent]
    });
    fixture = TestBed.createComponent(ActualizacionNotaEvolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
