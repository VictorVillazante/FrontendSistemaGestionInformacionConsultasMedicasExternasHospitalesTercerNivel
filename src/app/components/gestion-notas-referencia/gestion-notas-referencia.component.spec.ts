import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionNotasReferenciaComponent } from './gestion-notas-referencia.component';

describe('GestionNotasReferenciaComponent', () => {
  let component: GestionNotasReferenciaComponent;
  let fixture: ComponentFixture<GestionNotasReferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionNotasReferenciaComponent]
    });
    fixture = TestBed.createComponent(GestionNotasReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
