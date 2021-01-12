import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarsenhafinalizarComponent } from './recuperarsenhafinalizar.component';

describe('RecuperarsenhafinalizarComponent', () => {
  let component: RecuperarsenhafinalizarComponent;
  let fixture: ComponentFixture<RecuperarsenhafinalizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarsenhafinalizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarsenhafinalizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
