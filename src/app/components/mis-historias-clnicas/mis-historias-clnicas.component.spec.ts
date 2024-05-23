import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisHistoriasClnicasComponent } from './mis-historias-clnicas.component';

describe('MisHistoriasClnicasComponent', () => {
  let component: MisHistoriasClnicasComponent;
  let fixture: ComponentFixture<MisHistoriasClnicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisHistoriasClnicasComponent]
    });
    fixture = TestBed.createComponent(MisHistoriasClnicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
