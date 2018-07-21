import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHijoJugadorComponent } from './componente-hijo-jugador.component';

describe('ComponenteHijoJugadorComponent', () => {
  let component: ComponenteHijoJugadorComponent;
  let fixture: ComponentFixture<ComponenteHijoJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteHijoJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteHijoJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
