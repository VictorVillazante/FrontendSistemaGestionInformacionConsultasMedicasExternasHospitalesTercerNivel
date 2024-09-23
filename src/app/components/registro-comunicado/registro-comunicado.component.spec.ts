import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComunicadoComponent } from './registro-comunicado.component';

describe('RegistroComunicadoComponent', () => {
  let component: RegistroComunicadoComponent;
  let fixture: ComponentFixture<RegistroComunicadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroComunicadoComponent]
    });
    fixture = TestBed.createComponent(RegistroComunicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
