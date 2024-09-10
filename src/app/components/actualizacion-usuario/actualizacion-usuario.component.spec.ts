import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionUsuarioComponent } from './actualizacion-usuario.component';

describe('ActualizacionUsuarioComponent', () => {
  let component: ActualizacionUsuarioComponent;
  let fixture: ComponentFixture<ActualizacionUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizacionUsuarioComponent]
    });
    fixture = TestBed.createComponent(ActualizacionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
