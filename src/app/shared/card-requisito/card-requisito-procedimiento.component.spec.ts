import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRequisitoProcedimientoComponent } from './card-requisito-procedimiento.component';

describe('CardRequisitoProcedimientoComponent', () => {
  let component: CardRequisitoProcedimientoComponent;
  let fixture: ComponentFixture<CardRequisitoProcedimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardRequisitoProcedimientoComponent]
    });
    fixture = TestBed.createComponent(CardRequisitoProcedimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
