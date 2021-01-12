import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlarUsuarioComponent } from './controlar-usuario.component';

describe('ControlarUsuarioComponent', () => {
  let component: ControlarUsuarioComponent;
  let fixture: ComponentFixture<ControlarUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlarUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
