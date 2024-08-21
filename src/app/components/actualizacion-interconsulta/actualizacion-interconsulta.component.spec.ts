import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionInterconsultaComponent } from './actualizacion-interconsulta.component';

describe('ActualizacionInterconsultaComponent', () => {
  let component: ActualizacionInterconsultaComponent;
  let fixture: ComponentFixture<ActualizacionInterconsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionInterconsultaComponent]
    });
    fixture = TestBed.createComponent(ActualizacionInterconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
