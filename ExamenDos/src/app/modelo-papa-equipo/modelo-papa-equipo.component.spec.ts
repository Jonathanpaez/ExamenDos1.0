import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloPapaEquipoComponent } from './modelo-papa-equipo.component';

describe('ModeloPapaEquipoComponent', () => {
  let component: ModeloPapaEquipoComponent;
  let fixture: ComponentFixture<ModeloPapaEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloPapaEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloPapaEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
