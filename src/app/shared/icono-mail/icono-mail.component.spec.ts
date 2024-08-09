import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoMailComponent } from './icono-mail.component';

describe('IconoMailComponent', () => {
  let component: IconoMailComponent;
  let fixture: ComponentFixture<IconoMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconoMailComponent]
    });
    fixture = TestBed.createComponent(IconoMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
