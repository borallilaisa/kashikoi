import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaDeContatoComponent } from './caixa-de-contato.component';

describe('CaixaDeContatoComponent', () => {
  let component: CaixaDeContatoComponent;
  let fixture: ComponentFixture<CaixaDeContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaDeContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaDeContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
