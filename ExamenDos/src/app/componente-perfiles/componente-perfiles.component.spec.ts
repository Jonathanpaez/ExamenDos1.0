import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePerfilesComponent } from './componente-perfiles.component';

describe('ComponentePerfilesComponent', () => {
  let component: ComponentePerfilesComponent;
  let fixture: ComponentFixture<ComponentePerfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePerfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
