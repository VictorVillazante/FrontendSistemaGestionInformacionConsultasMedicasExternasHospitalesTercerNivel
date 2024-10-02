import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProcedimientosElementosRequisitosComponent } from './gestion-procedimientos-elementos-requisitos.component';

describe('GestionProcedimientosElementosRequisitosComponent', () => {
  let component: GestionProcedimientosElementosRequisitosComponent;
  let fixture: ComponentFixture<GestionProcedimientosElementosRequisitosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProcedimientosElementosRequisitosComponent]
    });
    fixture = TestBed.createComponent(GestionProcedimientosElementosRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
