import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMisRecetasComponent } from './ver-mis-recetas.component';

describe('VerMisRecetasComponent', () => {
  let component: VerMisRecetasComponent;
  let fixture: ComponentFixture<VerMisRecetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerMisRecetasComponent]
    });
    fixture = TestBed.createComponent(VerMisRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
