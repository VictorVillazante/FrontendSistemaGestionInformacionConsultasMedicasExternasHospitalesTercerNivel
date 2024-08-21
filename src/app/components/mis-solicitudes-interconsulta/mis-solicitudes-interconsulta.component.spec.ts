import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisSolicitudesInterconsultaComponent } from './mis-solicitudes-interconsulta.component';

describe('MisSolicitudesInterconsultaComponent', () => {
  let component: MisSolicitudesInterconsultaComponent;
  let fixture: ComponentFixture<MisSolicitudesInterconsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisSolicitudesInterconsultaComponent]
    });
    fixture = TestBed.createComponent(MisSolicitudesInterconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
