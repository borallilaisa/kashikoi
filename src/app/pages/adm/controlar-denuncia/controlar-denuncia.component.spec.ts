import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlarDenunciaComponent } from './controlar-denuncia.component';

describe('ControlarDenunciaComponent', () => {
  let component: ControlarDenunciaComponent;
  let fixture: ComponentFixture<ControlarDenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlarDenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlarDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
