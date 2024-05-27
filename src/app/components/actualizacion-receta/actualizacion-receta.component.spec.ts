import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionRecetaComponent } from './actualizacion-receta.component';

describe('ActualizacionRecetaComponent', () => {
  let component: ActualizacionRecetaComponent;
  let fixture: ComponentFixture<ActualizacionRecetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionRecetaComponent]
    });
    fixture = TestBed.createComponent(ActualizacionRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
