import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionNotasEvolucionComponent } from './gestion-notas-evolucion.component';

describe('GestionNotasEvolucionComponent', () => {
  let component: GestionNotasEvolucionComponent;
  let fixture: ComponentFixture<GestionNotasEvolucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionNotasEvolucionComponent]
    });
    fixture = TestBed.createComponent(GestionNotasEvolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
