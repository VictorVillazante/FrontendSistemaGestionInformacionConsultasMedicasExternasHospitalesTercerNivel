import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMedicoEspecialistaComponent } from './card-medico-especialista.component';

describe('CardMedicoEspecialistaComponent', () => {
  let component: CardMedicoEspecialistaComponent;
  let fixture: ComponentFixture<CardMedicoEspecialistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMedicoEspecialistaComponent]
    });
    fixture = TestBed.createComponent(CardMedicoEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
