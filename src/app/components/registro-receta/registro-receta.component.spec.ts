import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroRecetaComponent } from './registro-receta.component';

describe('RegistroRecetaComponent', () => {
  let component: RegistroRecetaComponent;
  let fixture: ComponentFixture<RegistroRecetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroRecetaComponent]
    });
    fixture = TestBed.createComponent(RegistroRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
