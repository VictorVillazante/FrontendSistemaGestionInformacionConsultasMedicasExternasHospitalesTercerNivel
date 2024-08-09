import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoFacebookComponent } from './icono-facebook.component';

describe('IconoFacebookComponent', () => {
  let component: IconoFacebookComponent;
  let fixture: ComponentFixture<IconoFacebookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconoFacebookComponent]
    });
    fixture = TestBed.createComponent(IconoFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
