import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisExamenesComplementariosComponent } from './mis-examenes-complementarios.component';

describe('MisExamenesComplementariosComponent', () => {
  let component: MisExamenesComplementariosComponent;
  let fixture: ComponentFixture<MisExamenesComplementariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisExamenesComplementariosComponent]
    });
    fixture = TestBed.createComponent(MisExamenesComplementariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
