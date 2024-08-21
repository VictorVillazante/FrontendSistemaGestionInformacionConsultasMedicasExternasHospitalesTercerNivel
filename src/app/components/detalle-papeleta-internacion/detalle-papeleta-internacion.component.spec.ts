import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePapeletaInternacionComponent } from './detalle-papeleta-internacion.component';

describe('DetallePapeletaInternacionComponent', () => {
  let component: DetallePapeletaInternacionComponent;
  let fixture: ComponentFixture<DetallePapeletaInternacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePapeletaInternacionComponent]
    });
    fixture = TestBed.createComponent(DetallePapeletaInternacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
