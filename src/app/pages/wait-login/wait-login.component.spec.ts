import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitLoginComponent } from './wait-login.component';

describe('WaitLoginComponent', () => {
  let component: WaitLoginComponent;
  let fixture: ComponentFixture<WaitLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
