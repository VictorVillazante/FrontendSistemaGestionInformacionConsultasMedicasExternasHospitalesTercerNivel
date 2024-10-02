import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProcedimientosElementosComponent } from './gestion-procedimientos-elementos.component';

describe('GestionProcedimientosElementosComponent', () => {
  let component: GestionProcedimientosElementosComponent;
  let fixture: ComponentFixture<GestionProcedimientosElementosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProcedimientosElementosComponent]
    });
    fixture = TestBed.createComponent(GestionProcedimientosElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
