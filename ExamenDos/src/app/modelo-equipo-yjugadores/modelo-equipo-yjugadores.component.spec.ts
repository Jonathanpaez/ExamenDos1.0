import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloEquipoYJugadoresComponent } from './modelo-equipo-yjugadores.component';

describe('ModeloEquipoYJugadoresComponent', () => {
  let component: ModeloEquipoYJugadoresComponent;
  let fixture: ComponentFixture<ModeloEquipoYJugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloEquipoYJugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloEquipoYJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
