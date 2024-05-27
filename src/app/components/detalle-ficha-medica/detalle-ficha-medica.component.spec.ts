import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFichaMedicaComponent } from './detalle-ficha-medica.component';

describe('DetalleFichaMedicaComponent', () => {
  let component: DetalleFichaMedicaComponent;
  let fixture: ComponentFixture<DetalleFichaMedicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleFichaMedicaComponent]
    });
    fixture = TestBed.createComponent(DetalleFichaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
