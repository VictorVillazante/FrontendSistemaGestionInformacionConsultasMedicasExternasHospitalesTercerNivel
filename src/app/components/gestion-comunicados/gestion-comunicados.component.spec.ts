import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionComunicadosComponent } from './gestion-comunicados.component';

describe('GestionComunicadosComponent', () => {
  let component: GestionComunicadosComponent;
  let fixture: ComponentFixture<GestionComunicadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionComunicadosComponent]
    });
    fixture = TestBed.createComponent(GestionComunicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
