import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroExamenComplementarioComponent } from './registro-examen-complementario.component';

describe('RegistroExamenComplementarioComponent', () => {
  let component: RegistroExamenComplementarioComponent;
  let fixture: ComponentFixture<RegistroExamenComplementarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroExamenComplementarioComponent]
    });
    fixture = TestBed.createComponent(RegistroExamenComplementarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
