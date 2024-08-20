import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEspecialidadesRequisitosComponent } from './section-especialidades-requisitos.component';

describe('SectionEspecialidadesRequisitosComponent', () => {
  let component: SectionEspecialidadesRequisitosComponent;
  let fixture: ComponentFixture<SectionEspecialidadesRequisitosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionEspecialidadesRequisitosComponent]
    });
    fixture = TestBed.createComponent(SectionEspecialidadesRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
