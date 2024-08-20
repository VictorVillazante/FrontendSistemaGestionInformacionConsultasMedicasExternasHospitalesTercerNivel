import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEspecialidadProcedimientoComponent } from './card-especialidad-procedimiento.component';

describe('CardEspecialidadProcedimientoComponent', () => {
  let component: CardEspecialidadProcedimientoComponent;
  let fixture: ComponentFixture<CardEspecialidadProcedimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardEspecialidadProcedimientoComponent]
    });
    fixture = TestBed.createComponent(CardEspecialidadProcedimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
