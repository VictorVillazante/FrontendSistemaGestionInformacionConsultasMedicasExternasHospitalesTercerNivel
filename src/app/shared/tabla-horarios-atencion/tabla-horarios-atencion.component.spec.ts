import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaHorariosAtencionComponent } from './tabla-horarios-atencion.component';

describe('TablaHorariosAtencionComponent', () => {
  let component: TablaHorariosAtencionComponent;
  let fixture: ComponentFixture<TablaHorariosAtencionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaHorariosAtencionComponent]
    });
    fixture = TestBed.createComponent(TablaHorariosAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
