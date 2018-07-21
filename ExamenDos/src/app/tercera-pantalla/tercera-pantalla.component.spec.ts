import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceraPantallaComponent } from './tercera-pantalla.component';

describe('TerceraPantallaComponent', () => {
  let component: TerceraPantallaComponent;
  let fixture: ComponentFixture<TerceraPantallaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceraPantallaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceraPantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
