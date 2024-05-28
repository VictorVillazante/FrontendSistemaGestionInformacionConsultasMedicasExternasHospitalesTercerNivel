import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisNotasEvolucionComponent } from './mis-notas-evolucion.component';

describe('MisNotasEvolucionComponent', () => {
  let component: MisNotasEvolucionComponent;
  let fixture: ComponentFixture<MisNotasEvolucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisNotasEvolucionComponent]
    });
    fixture = TestBed.createComponent(MisNotasEvolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
