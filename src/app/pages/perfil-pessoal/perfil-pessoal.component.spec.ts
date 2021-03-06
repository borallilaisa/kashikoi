import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPessoalComponent } from './perfil-pessoal.component';

describe('PerfilPessoalComponent', () => {
  let component: PerfilPessoalComponent;
  let fixture: ComponentFixture<PerfilPessoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilPessoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
