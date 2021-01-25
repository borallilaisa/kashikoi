import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntosMaisPopularesGraphComponent } from './assuntos-mais-populares-graph.component';

describe('AssuntosMaisPopularesGraphComponent', () => {
  let component: AssuntosMaisPopularesGraphComponent;
  let fixture: ComponentFixture<AssuntosMaisPopularesGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssuntosMaisPopularesGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuntosMaisPopularesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
