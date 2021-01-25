import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroConversaDiaGraphComponent } from './numero-conversa-dia-graph.component';

describe('NumeroConversaDiaGraphComponent', () => {
  let component: NumeroConversaDiaGraphComponent;
  let fixture: ComponentFixture<NumeroConversaDiaGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroConversaDiaGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroConversaDiaGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
