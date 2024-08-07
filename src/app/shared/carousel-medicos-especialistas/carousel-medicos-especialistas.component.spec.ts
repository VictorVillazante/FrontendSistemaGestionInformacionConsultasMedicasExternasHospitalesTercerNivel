import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMedicosEspecialistasComponent } from './carousel-medicos-especialistas.component';

describe('CarouselMedicosEspecialistasComponent', () => {
  let component: CarouselMedicosEspecialistasComponent;
  let fixture: ComponentFixture<CarouselMedicosEspecialistasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselMedicosEspecialistasComponent]
    });
    fixture = TestBed.createComponent(CarouselMedicosEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
