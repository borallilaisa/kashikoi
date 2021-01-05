import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAssuntosOnlyComponent } from './search-assuntosonly.component';

describe('SearchAssuntosOnlyComponent', () => {
  let component: SearchAssuntosOnlyComponent;
  let fixture: ComponentFixture<SearchAssuntosOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAssuntosOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAssuntosOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
