import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPasoProcedimientoComponent } from './card-paso-procedimiento.component';

describe('CardPasoProcedimientoComponent', () => {
  let component: CardPasoProcedimientoComponent;
  let fixture: ComponentFixture<CardPasoProcedimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPasoProcedimientoComponent]
    });
    fixture = TestBed.createComponent(CardPasoProcedimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
