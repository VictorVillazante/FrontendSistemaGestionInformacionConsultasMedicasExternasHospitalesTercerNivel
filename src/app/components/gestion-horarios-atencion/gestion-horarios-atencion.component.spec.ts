import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHorariosAtencionComponent } from './gestion-horarios-atencion.component';

describe('GestionHorariosAtencionComponent', () => {
  let component: GestionHorariosAtencionComponent;
  let fixture: ComponentFixture<GestionHorariosAtencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionHorariosAtencionComponent]
    });
    fixture = TestBed.createComponent(GestionHorariosAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
