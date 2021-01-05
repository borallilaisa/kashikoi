import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutopoComponent } from './menutopo.component';

describe('MenutopoComponent', () => {
  let component: MenutopoComponent;
  let fixture: ComponentFixture<MenutopoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenutopoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenutopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
