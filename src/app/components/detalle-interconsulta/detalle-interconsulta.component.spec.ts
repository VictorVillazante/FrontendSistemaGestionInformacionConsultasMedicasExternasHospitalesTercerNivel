import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleInterconsultaComponent } from './detalle-interconsulta.component';

describe('DetalleInterconsultaComponent', () => {
  let component: DetalleInterconsultaComponent;
  let fixture: ComponentFixture<DetalleInterconsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleInterconsultaComponent]
    });
    fixture = TestBed.createComponent(DetalleInterconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
