import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionExamenComplementarioComponent } from './actualizacion-examen-complementario.component';

describe('ActualizacionExamenComplementarioComponent', () => {
  let component: ActualizacionExamenComplementarioComponent;
  let fixture: ComponentFixture<ActualizacionExamenComplementarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionExamenComplementarioComponent]
    });
    fixture = TestBed.createComponent(ActualizacionExamenComplementarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
