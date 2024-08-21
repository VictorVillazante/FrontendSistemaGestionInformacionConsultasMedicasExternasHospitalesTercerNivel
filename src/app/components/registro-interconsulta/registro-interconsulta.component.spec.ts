import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInterconsultaComponent } from './registro-interconsulta.component';

describe('RegistroInterconsultaComponent', () => {
  let component: RegistroInterconsultaComponent;
  let fixture: ComponentFixture<RegistroInterconsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroInterconsultaComponent]
    });
    fixture = TestBed.createComponent(RegistroInterconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
