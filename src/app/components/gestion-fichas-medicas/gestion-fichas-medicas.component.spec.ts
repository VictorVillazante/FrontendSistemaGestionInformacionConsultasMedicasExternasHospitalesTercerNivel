import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFichasMedicasComponent } from './gestion-fichas-medicas.component';

describe('GestionFichasMedicasComponent', () => {
  let component: GestionFichasMedicasComponent;
  let fixture: ComponentFixture<GestionFichasMedicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionFichasMedicasComponent]
    });
    fixture = TestBed.createComponent(GestionFichasMedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
