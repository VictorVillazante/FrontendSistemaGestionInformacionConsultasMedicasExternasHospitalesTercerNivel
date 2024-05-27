import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroNotaReferenciaComponent } from './registro-nota-referencia.component';

describe('RegistroNotaReferenciaComponent', () => {
  let component: RegistroNotaReferenciaComponent;
  let fixture: ComponentFixture<RegistroNotaReferenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroNotaReferenciaComponent]
    });
    fixture = TestBed.createComponent(RegistroNotaReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
