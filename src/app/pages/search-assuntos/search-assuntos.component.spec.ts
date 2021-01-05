import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAssuntosComponent } from './search-assuntos.component';

describe('SearchAssuntosComponent', () => {
  let component: SearchAssuntosComponent;
  let fixture: ComponentFixture<SearchAssuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAssuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAssuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
