import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisConsultasMedicasComponent } from './mis-consultas-medicas.component';

describe('MisConsultasMedicasComponent', () => {
  let component: MisConsultasMedicasComponent;
  let fixture: ComponentFixture<MisConsultasMedicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisConsultasMedicasComponent]
    });
    fixture = TestBed.createComponent(MisConsultasMedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
