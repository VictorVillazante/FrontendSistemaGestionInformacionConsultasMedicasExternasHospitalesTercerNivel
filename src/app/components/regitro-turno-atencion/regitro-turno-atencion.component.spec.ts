import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitroTurnoAtencionComponent } from './regitro-turno-atencion.component';

describe('RegitroTurnoAtencionComponent', () => {
  let component: RegitroTurnoAtencionComponent;
  let fixture: ComponentFixture<RegitroTurnoAtencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegitroTurnoAtencionComponent]
    });
    fixture = TestBed.createComponent(RegitroTurnoAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
