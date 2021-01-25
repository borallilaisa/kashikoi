import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministrativaComponent } from './home-administrativa.component';

describe('HomeAdministrativaComponent', () => {
  let component: HomeAdministrativaComponent;
  let fixture: ComponentFixture<HomeAdministrativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdministrativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdministrativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
