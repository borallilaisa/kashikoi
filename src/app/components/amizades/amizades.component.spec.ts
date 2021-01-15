import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmizadesComponent } from './amizades.component';

describe('AmizadesComponent', () => {
  let component: AmizadesComponent;
  let fixture: ComponentFixture<AmizadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmizadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmizadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
