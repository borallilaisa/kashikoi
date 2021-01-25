import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroNovosUsuariosGraphComponent } from './numero-novos-usuarios-graph.component';

describe('NumeroNovosUsuariosGraphComponent', () => {
  let component: NumeroNovosUsuariosGraphComponent;
  let fixture: ComponentFixture<NumeroNovosUsuariosGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeroNovosUsuariosGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroNovosUsuariosGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
