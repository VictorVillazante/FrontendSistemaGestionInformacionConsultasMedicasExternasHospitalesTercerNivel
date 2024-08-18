import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInterconsultasComponent } from './gestion-interconsultas.component';

describe('GestionInterconsultasComponent', () => {
  let component: GestionInterconsultasComponent;
  let fixture: ComponentFixture<GestionInterconsultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionInterconsultasComponent]
    });
    fixture = TestBed.createComponent(GestionInterconsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
