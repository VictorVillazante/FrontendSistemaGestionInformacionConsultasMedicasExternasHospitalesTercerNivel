import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputImagenesComponent } from './input-imagenes.component';

describe('InputImagenesComponent', () => {
  let component: InputImagenesComponent;
  let fixture: ComponentFixture<InputImagenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputImagenesComponent]
    });
    fixture = TestBed.createComponent(InputImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
