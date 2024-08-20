import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEspecialidadRequisitoComponent } from './card-especialidad-requisito.component';

describe('CardEspecialidadRequisitoComponent', () => {
  let component: CardEspecialidadRequisitoComponent;
  let fixture: ComponentFixture<CardEspecialidadRequisitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardEspecialidadRequisitoComponent]
    });
    fixture = TestBed.createComponent(CardEspecialidadRequisitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
