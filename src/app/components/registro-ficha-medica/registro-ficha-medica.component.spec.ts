import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFichaMedicaComponent } from './registro-ficha-medica.component';

describe('RegistroFichaMedicaComponent', () => {
  let component: RegistroFichaMedicaComponent;
  let fixture: ComponentFixture<RegistroFichaMedicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroFichaMedicaComponent]
    });
    fixture = TestBed.createComponent(RegistroFichaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
