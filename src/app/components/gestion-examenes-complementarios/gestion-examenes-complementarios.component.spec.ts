import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionExamenesComplementariosComponent } from './gestion-examenes-complementarios.component';

describe('GestionExamenesComplementariosComponent', () => {
  let component: GestionExamenesComplementariosComponent;
  let fixture: ComponentFixture<GestionExamenesComplementariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionExamenesComplementariosComponent]
    });
    fixture = TestBed.createComponent(GestionExamenesComplementariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
