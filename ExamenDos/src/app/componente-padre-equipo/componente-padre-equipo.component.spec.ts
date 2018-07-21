import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePadreEquipoComponent } from './componente-padre-equipo.component';

describe('ComponentePadreEquipoComponent', () => {
  let component: ComponentePadreEquipoComponent;
  let fixture: ComponentFixture<ComponentePadreEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePadreEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePadreEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
