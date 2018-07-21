import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaPantallaComponent } from './segunda-pantalla.component';

describe('SegundaPantallaComponent', () => {
  let component: SegundaPantallaComponent;
  let fixture: ComponentFixture<SegundaPantallaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaPantallaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaPantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
