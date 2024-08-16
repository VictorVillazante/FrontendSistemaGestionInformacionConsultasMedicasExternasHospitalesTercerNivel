import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonTipoBackgroundComponent } from './boton-tipo-background.component';

describe('BotonTipoBackgroundComponent', () => {
  let component: BotonTipoBackgroundComponent;
  let fixture: ComponentFixture<BotonTipoBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonTipoBackgroundComponent]
    });
    fixture = TestBed.createComponent(BotonTipoBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
