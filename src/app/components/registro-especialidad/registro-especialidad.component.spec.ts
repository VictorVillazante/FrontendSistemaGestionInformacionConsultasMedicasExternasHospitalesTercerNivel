import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEspecialidadComponent } from './registro-especialidad.component';

describe('RegistroEspecialidadComponent', () => {
  let component: RegistroEspecialidadComponent;
  let fixture: ComponentFixture<RegistroEspecialidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroEspecialidadComponent]
    });
    fixture = TestBed.createComponent(RegistroEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
