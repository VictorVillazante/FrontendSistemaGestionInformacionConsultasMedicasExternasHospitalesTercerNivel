import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProcedimientosElementosPasosComponent } from './gestion-procedimientos-elementos-pasos.component';

describe('GestionProcedimientosElementosPasosComponent', () => {
  let component: GestionProcedimientosElementosPasosComponent;
  let fixture: ComponentFixture<GestionProcedimientosElementosPasosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProcedimientosElementosPasosComponent]
    });
    fixture = TestBed.createComponent(GestionProcedimientosElementosPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
