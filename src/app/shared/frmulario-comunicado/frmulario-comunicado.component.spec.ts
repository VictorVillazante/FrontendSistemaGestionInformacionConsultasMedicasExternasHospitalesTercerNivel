import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmularioComunicadoComponent } from './frmulario-comunicado.component';

describe('FrmularioComunicadoComponent', () => {
  let component: FrmularioComunicadoComponent;
  let fixture: ComponentFixture<FrmularioComunicadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrmularioComunicadoComponent]
    });
    fixture = TestBed.createComponent(FrmularioComunicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
