import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosListadoComponent } from './elementos-listado.component';

describe('ElementosListadoComponent', () => {
  let component: ElementosListadoComponent;
  let fixture: ComponentFixture<ElementosListadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementosListadoComponent]
    });
    fixture = TestBed.createComponent(ElementosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
