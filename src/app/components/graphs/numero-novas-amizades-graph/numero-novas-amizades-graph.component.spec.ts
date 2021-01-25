import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroNovasAmizadesGraphComponent } from './numero-novas-amizades-graph.component';

describe('NumeroNovasAmizadesGraphComponent', () => {
  let component: NumeroNovasAmizadesGraphComponent;
  let fixture: ComponentFixture<NumeroNovasAmizadesGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroNovasAmizadesGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroNovasAmizadesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
