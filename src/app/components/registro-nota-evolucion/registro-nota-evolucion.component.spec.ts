import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroNotaEvolucionComponent } from './registro-nota-evolucion.component';

describe('RegistroNotaEvolucionComponent', () => {
  let component: RegistroNotaEvolucionComponent;
  let fixture: ComponentFixture<RegistroNotaEvolucionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroNotaEvolucionComponent]
    });
    fixture = TestBed.createComponent(RegistroNotaEvolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
