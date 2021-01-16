import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontrarPessoasModalComponent } from './encontrar-pessoas-modal.component';

describe('EncontrarPessoasModalComponent', () => {
  let component: EncontrarPessoasModalComponent;
  let fixture: ComponentFixture<EncontrarPessoasModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncontrarPessoasModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncontrarPessoasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
