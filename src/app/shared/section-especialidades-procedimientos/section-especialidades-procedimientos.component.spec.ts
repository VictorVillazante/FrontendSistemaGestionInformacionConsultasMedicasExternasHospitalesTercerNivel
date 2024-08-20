import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEspecialidadesProcedimientosComponent } from './section-especialidades-procedimientos.component';

describe('SectionEspecialidadesProcedimientosComponent', () => {
  let component: SectionEspecialidadesProcedimientosComponent;
  let fixture: ComponentFixture<SectionEspecialidadesProcedimientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionEspecialidadesProcedimientosComponent]
    });
    fixture = TestBed.createComponent(SectionEspecialidadesProcedimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
