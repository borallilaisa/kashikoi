import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCompleteComponent } from './notification-complete.component';

describe('NotificationCompleteComponent', () => {
  let component: NotificationCompleteComponent;
  let fixture: ComponentFixture<NotificationCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
