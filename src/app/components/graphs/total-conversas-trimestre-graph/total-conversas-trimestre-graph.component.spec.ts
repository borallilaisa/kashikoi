import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalConversasTrimestreGraphComponent } from './total-conversas-trimestre-graph.component';

describe('TotalConversasTrimestreGraphComponent', () => {
  let component: TotalConversasTrimestreGraphComponent;
  let fixture: ComponentFixture<TotalConversasTrimestreGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalConversasTrimestreGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalConversasTrimestreGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
