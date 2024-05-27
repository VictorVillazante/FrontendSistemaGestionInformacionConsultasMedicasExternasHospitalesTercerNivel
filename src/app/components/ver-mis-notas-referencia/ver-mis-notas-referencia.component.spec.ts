import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMisNotasReferenciaComponent } from './ver-mis-notas-referencia.component';

describe('VerMisNotasReferenciaComponent', () => {
  let component: VerMisNotasReferenciaComponent;
  let fixture: ComponentFixture<VerMisNotasReferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerMisNotasReferenciaComponent]
    });
    fixture = TestBed.createComponent(VerMisNotasReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
