import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisNotasReferenciaComponent } from './mis-notas-referencia.component';

describe('MisNotasReferenciaComponent', () => {
  let component: MisNotasReferenciaComponent;
  let fixture: ComponentFixture<MisNotasReferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisNotasReferenciaComponent]
    });
    fixture = TestBed.createComponent(MisNotasReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
