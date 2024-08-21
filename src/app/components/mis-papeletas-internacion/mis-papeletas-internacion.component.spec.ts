import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPapeletasInternacionComponent } from './mis-papeletas-internacion.component';

describe('MisPapeletasInternacionComponent', () => {
  let component: MisPapeletasInternacionComponent;
  let fixture: ComponentFixture<MisPapeletasInternacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisPapeletasInternacionComponent]
    });
    fixture = TestBed.createComponent(MisPapeletasInternacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
