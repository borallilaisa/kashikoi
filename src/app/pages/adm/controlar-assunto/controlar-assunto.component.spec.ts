import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlarAssuntoComponent } from './controlar-assunto.component';

describe('ControlarAssuntoComponent', () => {
  let component: ControlarAssuntoComponent;
  let fixture: ComponentFixture<ControlarAssuntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlarAssuntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlarAssuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
