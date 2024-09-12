import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRequerimientosComponent } from './gestion-requerimientos.component';

describe('GestionRequerimientosComponent', () => {
  let component: GestionRequerimientosComponent;
  let fixture: ComponentFixture<GestionRequerimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionRequerimientosComponent]
    });
    fixture = TestBed.createComponent(GestionRequerimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
