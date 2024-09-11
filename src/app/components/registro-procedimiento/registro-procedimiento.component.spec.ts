import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProcedimientoComponent } from './registro-procedimiento.component';

describe('RegistroProcedimientoComponent', () => {
  let component: RegistroProcedimientoComponent;
  let fixture: ComponentFixture<RegistroProcedimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroProcedimientoComponent]
    });
    fixture = TestBed.createComponent(RegistroProcedimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
