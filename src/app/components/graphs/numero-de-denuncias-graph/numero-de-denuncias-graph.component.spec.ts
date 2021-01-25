import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroDeDenunciasGraphComponent } from './numero-de-denuncias-graph.component';

describe('NumeroDeDenunciasGraphComponent', () => {
  let component: NumeroDeDenunciasGraphComponent;
  let fixture: ComponentFixture<NumeroDeDenunciasGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroDeDenunciasGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroDeDenunciasGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
