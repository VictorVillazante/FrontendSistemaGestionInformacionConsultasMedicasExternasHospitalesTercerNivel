import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconoTelefonoComponent } from './icono-telefono.component';

describe('IconoTelefonoComponent', () => {
  let component: IconoTelefonoComponent;
  let fixture: ComponentFixture<IconoTelefonoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconoTelefonoComponent]
    });
    fixture = TestBed.createComponent(IconoTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
