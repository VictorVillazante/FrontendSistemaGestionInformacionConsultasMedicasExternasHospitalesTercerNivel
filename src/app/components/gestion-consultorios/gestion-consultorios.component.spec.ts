import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionConsultoriosComponent } from './gestion-consultorios.component';

describe('GestionConsultoriosComponent', () => {
  let component: GestionConsultoriosComponent;
  let fixture: ComponentFixture<GestionConsultoriosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionConsultoriosComponent]
    });
    fixture = TestBed.createComponent(GestionConsultoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
