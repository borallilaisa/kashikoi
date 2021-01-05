import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInStarterPageComponent } from './logged-in-starter-page.component';

describe('LoggedInStarterPageComponent', () => {
  let component: LoggedInStarterPageComponent;
  let fixture: ComponentFixture<LoggedInStarterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedInStarterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInStarterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
