import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroConsultorioComponent } from './registro-consultorio.component';

describe('RegistroConsultorioComponent', () => {
  let component: RegistroConsultorioComponent;
  let fixture: ComponentFixture<RegistroConsultorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroConsultorioComponent]
    });
    fixture = TestBed.createComponent(RegistroConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
