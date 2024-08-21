import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPapeletaInternacionComponent } from './registro-papeleta-internacion.component';

describe('RegistroPapeletaInternacionComponent', () => {
  let component: RegistroPapeletaInternacionComponent;
  let fixture: ComponentFixture<RegistroPapeletaInternacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPapeletaInternacionComponent]
    });
    fixture = TestBed.createComponent(RegistroPapeletaInternacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
