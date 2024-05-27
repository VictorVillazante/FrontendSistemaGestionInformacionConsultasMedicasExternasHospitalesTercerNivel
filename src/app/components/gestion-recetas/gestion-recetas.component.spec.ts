import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRecetasComponent } from './gestion-recetas.component';

describe('GestionRecetasComponent', () => {
  let component: GestionRecetasComponent;
  let fixture: ComponentFixture<GestionRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionRecetasComponent]
    });
    fixture = TestBed.createComponent(GestionRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
