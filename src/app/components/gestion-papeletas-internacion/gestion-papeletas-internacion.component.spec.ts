import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPapeletasInternacionComponent } from './gestion-papeletas-internacion.component';

describe('GestionPapeletasInternacionComponent', () => {
  let component: GestionPapeletasInternacionComponent;
  let fixture: ComponentFixture<GestionPapeletasInternacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionPapeletasInternacionComponent]
    });
    fixture = TestBed.createComponent(GestionPapeletasInternacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
